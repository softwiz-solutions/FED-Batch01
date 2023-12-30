const { PrismaClient } = require("@prisma/client");
const { response } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();

const doSignup = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const dbUser = await prisma.User.findUnique({
      where: {
        email,
      },
    });
    console.log("db user", dbUser);
    // false,0,"",undefined,null
    if (dbUser) {
      const response = {
        success: false,
        message: "user already exist",
      };
      return res.json(response);
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = await prisma.User.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
    });
    console.log("new user", newUser);
    const response = {
      success: true,
      message: "User Craeted Successfully",
      user: newUser,
    };
    res.status(200).json(response);
  } catch (error) {
    console.log("error", error.message);
    const response = {
      success: false,
      error: error.message,
    };
    res.status(500).json(response);
  } finally {
  }
};
const doLogin = async (req,res) => {
  try {
    const { email, password } = req.body;
    const dbUser = await prisma.User.findUnique({
      where: {
        email,
      },
    });
    console.log("db user", dbUser);
    if (!dbUser) {
      const response = {
        success: false,
        message: "No user found",
      };
      return res.status(400).json(response);
    }

    const isPasswordMatch = await bcrypt.compare(password, dbUser.password);
    if (!isPasswordMatch) {
      const response = {
        success: false,
        message: "Incorrect Password",
      };
      return res.status(400).json(response);
    }

    const token = await jwt.sign(
      { userId: dbUser.id, email: dbUser.email },
      process.env.JWT_SECRET
    );

    console.log("token", token);
    const response = {
      success: true,
      message: "User logined Successfully",
      user: {
        email: dbUser.email,
        id: dbUser.id,
        name: dbUser.name,
        token,
      },
    };
    res.status(200).json(response);
  } catch (error) {
    console.log("error", error.message);
    const response = {
      success: false,
      error: error.message,
    };
    res.status(500).json(response);
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = { doSignup, doLogin };

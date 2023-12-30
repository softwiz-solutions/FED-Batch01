const jwt = require("jsonwebtoken");
const verifyUser = async (req, res, next) => {
  try {
    console.log("req.body", req.body);
    console.log("req.header", req.headers.authorization);
    const decode = await jwt.decode(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    console.log("decode", decode);
    if (decode) {
      next();
    } else {
      res.json({
        success: false,
        Message: "un authorized user",
      });
    }
  } catch (error) {
    console.log("error", error.message);
    const response = {
      success: false,
      message: "erro",
      errro: error.message,
    };
    res.json(response);
  }
};

module.exports = verifyUser;

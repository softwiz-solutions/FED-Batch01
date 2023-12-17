const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createTodo = async (req, res) => {
  try {
    console.log("req.body", req.body);
    const { title } = req.body;
    const todo = await prisma.Todos.create({
      data: {
        title,
      },
    });
    console.log("todo", todo);
    const response = {
      success: true,
      message: "Todo created successfully",
      todo,
    };
    res.status(200).json(response);
  } catch (error) {
    const response = {
      success: false,
      message: "Error in create todo",
      error: error.message,
    };
    res.status(500).json(response);
  } finally {
    await prisma.$disconnect();
  }
  // console.log("req", req.query);

  // const newPost = {
  //   id: req.body.id,
  //   title: req.body.title,
  // };
  // posts.push(newPost);
  // res.json(posts);
};

const deleteTodo = async (req, res) => {
  try {
    console.log("delte post", req.query);
    const { id } = req.query;
    const deletedTodo = await prisma.Todos.delete({
      where: {
        id,
      },
    });
    console.log("deletedTodo", deletedTodo);
    const response = {
      success: true,
      message: "Todo delete successfully",
      deletedTodo,
    };
    res.status(200).json(response);
  } catch (error) {
    const response = {
      success: false,
      message: "Error in delete todo",
      error: error.message,
    };
    res.status(500).json(response);
  } finally {
    await prisma.$disconnect();
  }
};
const updateTodo = async (req, res) => {
  try {
    console.log("req.body", req.body);
    const { id, title } = req.body;
    const updateTodo = await prisma.Todos.update({
      where: {
        id,
      },
      data: {
        title,
      },
    });
    console.log("update todo", updateTodo);
    const response = {
      success: true,
      message: "Todo update successfully",
      updateTodo,
    };
    res.status(200).json(response);
  } catch (error) {
    const response = {
      success: false,
      message: "Error in update todo",
      error: error.message,
    };
    res.status(500).json(response);
  } finally {
    await prisma.$disconnect();
  }
};
const getTodos = async (req, res) => {
  try {
    const allTodos = await prisma.Todos.findMany();
    console.log("allTodos", allTodos);
    const response = {
      success: true,
      message: "Todos retrive successfully",
      allTodos,
    };
    res.status(200).json(response);
  } catch (error) {
    const response = {
      success: false,
      message: "Error in get todos",
      error: error.message,
    };
    res.status(500).json(response);
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = { createTodo, getTodos, updateTodo, deleteTodo };

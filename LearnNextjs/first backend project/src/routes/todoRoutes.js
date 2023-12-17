const express = require("express");
const {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} = require("../controller/todoController");
const router = express.Router();

router.get("/get-todos", getTodos);
router.post("/create-todo", createTodo);
router.delete("/delete-todo", deleteTodo);
router.put("/update-todo", updateTodo);

module.exports = router;

const express = require("express");
const {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} = require("../controller/todoController");
const verifyUser = require("../utils/verifyUser");
const router = express.Router();

router.get("/get-todos", verifyUser,getTodos);
router.post("/create-todo", verifyUser,createTodo);
router.delete("/delete-todo",verifyUser, deleteTodo);
router.put("/update-todo", verifyUser,updateTodo);

module.exports = router;

const express = require("express");
const route = express.Router();

const {
  getAllTodo,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodoId,
  deleteAllTodos
} = require("../controllers/todo.controller");

const verifyToken = require("../middleware/auth")

route.get("/", getAllTodo);
route.get("/:id/todos", verifyToken, getTodoById)
route.post("/", createTodo);
route.put("/:id/update", updateTodo);
route.delete("/", deleteTodoId);
route.delete("/", deleteAllTodos);

module.exports = route;
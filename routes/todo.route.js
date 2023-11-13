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

route.get("/", getAllTodo);
route.get("/:id/todos", getTodoById)
route.post("/", createTodo);
route.put("/:id/update", updateTodo);
route.delete("/", deleteTodoId);
route.delete("/", deleteAllTodos);

module.exports = route;
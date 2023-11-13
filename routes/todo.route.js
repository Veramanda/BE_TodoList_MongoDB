const express = require("express");
const route = express.Router();

const {
  getAllTodo,
  getTodoById,
  createTodo,
  deleteTodo,
  updateTodo
} = require("../controllers/todo.controller");

route.get("/", getAllTodo);
route.get("/:id", getTodoById);
route.post("/", createTodo);
route.put("/", updateTodo);
route.delete("/", deleteTodo);

module.exports = route;
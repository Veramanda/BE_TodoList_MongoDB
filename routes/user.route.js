const express = require("express");
const route = express.Router();

const {
  getAllUser,
  getUserById,
  createUser,
} = require("../controllers/user.controller");

const verifyToken = require("../middleware/auth")

route.get("/", getAllUser);
route.get("/:id", verifyToken, getUserById);
route.post("/", createUser);

module.exports = route;
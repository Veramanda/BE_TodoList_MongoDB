const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  value: String,
  status: Boolean,
  description: String,
  userID: {
    type: mongoose.ObjectId,
    ref: 'User'
  }
})

const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo
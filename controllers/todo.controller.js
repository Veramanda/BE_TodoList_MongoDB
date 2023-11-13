const Todo = require('../models/todo');

module.exports = {
  getAllTodo: async (req, res) => {
    const todos = await Todo.find().populate("userID", ["_id", "name"])

    res.json({
      message: "berhasil mendapatkan data todo",
      data: todos
    })
  },

  getTodoById:(req, res) => {

  },

  createTodo:  async (req, res) => {
    let data = req.body

    await Todo.create(data)

    res.json({
      message: "berhasil membuat data todo"
    })
  },

  updateTodo: async (req, res) => {
    try {
      const updatedTodo = await Todo.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.json({
        message: 'Berhasil mengubah data todo',
        data: updatedTodo,
      });
    } catch (error) {
      res.status(500).json({
        error: 'Gagal mengubah data todo',
      });
    }
  },

  deleteTodo: async (req, res) => {
    try {
      const deletedTodo = await Todo.findByIdAndRemove(req.params.id);
      if (deletedTodo) {
        res.json({
          message: 'Berhasil menghapus data todo',
          data: deletedTodo,
        });
      } else {
        res.status(404).json({
          error: 'Data todo tidak ditemukan',
        });
      }
    } catch (error) {
      res.status(500).json({
        error: 'Gagal menghapus data todo',
      });
    }
  }
}
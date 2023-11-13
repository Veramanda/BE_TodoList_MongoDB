const Todo = require('../models/todo');

module.exports = {
  getAllTodo: async (req, res) => {
    const todos = await Todo.find().populate("userID", ["_id", "name"])

    res.json({
      message: "berhasil mendapatkan data todo",
      data: todos
    })
  },

  getTodoById: async (req, res) => {
    const {id} = req.params

    const todos = await Todo.find({userID: id})

    res.json(todos)
  },

  createTodo:  async (req, res) => {
    let data = req.body

    await Todo.create(data)

    res.json({
      message: "Berhasil membuat data todo"
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

  deleteTodoId: async (req, res) => {
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
  },

  deleteAllTodos: async (req, res) => {
    try {
      const deletedTodos = await Todo.deleteMany({ userID: req.user._id });
      res.json({
        message: 'Berhasil menghapus semua data todo',
        data: deletedTodos,
      });
    } catch (error) {
      res.status(500).json({
        error: 'Gagal menghapus semua data todo',
      });
    }
  }
}
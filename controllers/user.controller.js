const User = require('../models/user');

module.exports = {
  getAllUser: async (req, res) => {
    const user = req.user
    const users = await User.find({userID: user.id})

    res.json({
      message: "berhasil mendapatkan data user",
      data: users
    })
  },

  getUserById: async (req, res) => {
    const {id} = req.params
    const users = await User.findById(id)

    res.json(users)
  },

  createUser:  async (req, res) => {
    let data = req.body

    await User.create(data)

    res.json({
      message: "Berhasil Membuat Data User"
    })
  },
}
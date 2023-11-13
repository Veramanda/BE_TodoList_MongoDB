const mongoose = require('mongoose');

const db_url = "mongodb+srv://faidatun:veraa13@cluster0.lzylsvp.mongodb.net/"

const db = mongoose.connect(db_url)

module.exports = db
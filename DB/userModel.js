const mongoose = require('mongoose');

const user = mongoose.Schema({
    id: String,
    name: String
})

module.exports = mongoose.model("userModel", user)
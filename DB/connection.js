const mongoose = require('mongoose')

function connectDb(){
    mongoose.connect("mongodb://127.0.0.1:27017/express-mongoose", { UseNewUrlParser: true })
    console.log("Connected successfully")
}

module.exports = connectDb
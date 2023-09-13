const mongoose = require('mongoose')

function connectDb(){
    mongoose.connect(process.env.URL, { UseNewUrlParser: true })
    console.log("Connected successfully")
}

module.exports = connectDb
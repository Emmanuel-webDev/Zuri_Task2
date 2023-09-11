const express = require('express')
const userRoute = require('./Routes/user')
const db = require('./DB/connection')
require('dotenv').config()

const app = express();
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(userRoute)
db();

app.listen(process.env.PORT, ()=>{
    console.log(`Running on port ${process.env.PORT}`)
})
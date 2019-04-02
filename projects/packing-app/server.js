const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const morgan = require('morgan')
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect("mongodb://localhost:27017/packingDB", {useNewUrlParser: true}, () => {
    console.log("[V] Connected to the DB")
})

app.use("/auth", require('./routes/authRoutes.js'))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log(`[X] Server is running on Port ${PORT}`)
})
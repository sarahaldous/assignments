const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require("morgan")

app.use(express.json())
app.use(morgan('dev'))

app.use("/todo", require('./routes'))

mongoose.connect("mongodb://localhost:27017/first-db", {useNewUrlParser: true}, () => {
    console.log('Connected to the DB')
})


app.listen(5005, () => {
    console.log('[+] Server is running on Port 5005')
})
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 8008
const morgan = require("morgan")


app.use(express.json())
app.use(morgan('dev'))

app.use('/bounty', require('./routes/bounty'))

mongoose.connect("mongodb://localhost:27017/bounty-db", {useNewUrlParser: true}, () => {
    console.log("Connected to the DB")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


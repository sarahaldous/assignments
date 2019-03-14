const express = require('express')
const app = express()
const uuid = require('uuid/v4')
const PORT = process.env.PORT || 8008


app.use(express.json())

app.use('/bounty', require('./routes/bounty'))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

//QUESTION: ASK ABOUT "main": "index.js"  - generated automatically? change package.json?
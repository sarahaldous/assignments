const express = require('express')
const app = express()


app.use(express.json())

app.use('/bounty', require('./routes/bounty'))

app.listen(8008, () => {
    console.log("Server is running on port 8008")
})

//QUESTION: ASK ABOUT "main": "index.js"  - generated automatically? change package.json?
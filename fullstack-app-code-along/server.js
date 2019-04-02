const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const morgan = require('morgan')
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 8000

app.use(express.json())   // parses objects sent in requests - req.body
app.use(morgan('dev'))

mongoose.connect("mongodb://localhost:27017/raddish", {useNewUrlParser: true}, () => {
    console.log("[+] Connected to the DB")
})
//Routes
app.use("/api", expressJwt({secret: process.env.SECRET}))
app.use("/auth", require("./routes/authRouter.js"))
app.use("/public", require('./routes/publicRouter.js'))
app.use("/api/posts", require('./routes/postRouter.js'))

app.use((err, req, res, next) => {
    console.error(err)
    if(err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})
   
app.listen(PORT, () => {
        console.log(`[o] Server is running on Port ${PORT}`)
})

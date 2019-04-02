const express = require('express')
const postRouter = express.Router()
const Post = require('../models/post.js')


//All these routes REQUIRE AUTH - so we have res.user._id

//POST: add new post
postRouter.post("/", (req, res, next) => {
    const newPost = new Post(req.body)
    newPost.user = req.user._id
    newPost.save((err, savedPost) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedPost)
    })
})

//GET

//GET ALL

module.exports = postRouter
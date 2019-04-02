const express = require('express')
const publicRouter = express.Router()
const Post = require('../models/post.js')

//GET all posts - sorted by time = /public/
publicRouter.get("/", async (req, res, next) => {
    try {
        const posts = await Post.find().sort({timeStamp: -1})
        return res.status(200).send(posts)
    }
    catch(err){
        res.status(500)
        return next(err)
    }
})


//GET Posts by Thread - req.params.thread ==="humor", "recipes", etc - depends on the thread/category they choose
publicRouter.get("/thread/:thread", (req, res, next) => {
    Post.find({thread: req.params.thread},  (err, posts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})



module.exports = publicRouter
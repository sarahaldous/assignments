const express = require('express')
const authRouter = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/user.js')

//sign-up - POST - /auth/signup
authRouter.post("/signup", (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        //Does that username already exist?
        if(user){
            res.status(400)
            return next(new Error("That username is already taken."))
        }
        //Create new user
        const newUser = new User(req.body)
        //pre-save hook (from user.js) fires before this saves - the .save() is executed
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            //Create token
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
            //send response
            return res.status(201).send({user: savedUser.withoutPassword(), token})
        })
    })
})

//log-in - POST
authRouter.post("/login", (req, res, next) => {
    //Find a user by that username -> error or user object will be returned. It may be null.
    User.findOne({username: req.body.iusername.toLowerCase()}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
    //Does that user exist? Send err "Username or password incorrect."
        if(!user){
            res.status(403)
            return next(new Error("username or password incorrect"))
        }
     //If user DOES exoist, User.checkpassword(req.body.password) - returns (err, is Match[boolean])
        user.checkPassword(req.body.password, (err, isMatch) => {
            if(err){
                res.status(500)
                return next(err)
            }
              //if(!match) - "username or password incorrect"
            if(!isMatch){
                res.status(401)
                return next(new Error("Username or password incorrect"))
            }
            //Create token
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
            //Send response
            return res.status(200).send({user: user.withoutPassword(), token})
        })
    })
})


module.exports = authRouter
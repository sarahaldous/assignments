const express = require('express')
const todoRouter = express.Router()
const Todo = require('../models/todo.js')

todoRouter.get("/", (req, res) => {
    Todo.find((err, todos) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(todos)
    })
})

todoRouter.post("/", (req, res) => {
    const newTodo = new Todo(req.body)
    newTodo.save((err, newTodoObj) => {
        if(err) {
            releaseEvents.status(500)
            return res.send(err)
        }
        return res.status(201).send(newTodoObj)
    })
})

todoRouter.get("/:_id", (req, res) => {
    Todo.findOne({_id: req.params._id}, (err, foundTodo) =>{
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(foundTodo)
    })
    
})
todoRouter.delete("/:_id", (req, res) => {
    Todo.findOneAndRemove({_id: req.params._id}, (err, deletedTodo) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(202).send(`Really, you can put any message you want here, including returning the deleted object, or something like this: Successfully deleted Item with ID ${req.params._id} or title ${deletedTodo.title}`)
    })
})
    
todoRouter.put("/:_id", (req, res) => {
    Todo.findOneAndUpdate(
        {_id: req.params._id},
         req.body, 
         {new: true}, 
         (err, updatedTodo) => {
            if(err){
                res.status(500)
                return res.send(err)
            }
            return res.status(201).send(updatedTodo)
    })
})



module.exports = todoRouter
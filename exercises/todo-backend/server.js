const express = require('express')
const app = express()
const uuid = require('uuid/v4')

let todos = [
    {
        name: "the name",
        description: "its description",
        imageUrl: "imgUrl",
        completed: false,
        _id: uuid()
    }
]

app.use(express.json())

app.get('/todos', (req, res) => {
    res.send(todos)
})
app.get('/todos/:_id', (req, res) => {
    const ID = req.params._id
    const foundTodo = todos.find(todo => todo._id === ID)
    res.send(foundTodo)
})

app.post('/todos/', (req, res) => {
    req.body._id = uuid()
    todos.push(req.body)
    res.send(req.body)
})

app.delete('/todos/:_id', (req, res) => {
    const updatedTodos = todos.filter(todo => todo._id !== req.params._id)
    todos = updatedTodos
    res.send(todos)
})

app.put('/todos/:id', (req, res) => {
    const foundTodo = todos.find(todo => todo._id !== req.params._id)
    Object.assign(foundTodo, req.body)
    res.send(foundTodo)
})

app.listen(6000, () => {
    console.log("Server is running on port 6000")
})
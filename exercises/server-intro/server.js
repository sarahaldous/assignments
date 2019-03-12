const express = require('express')
const app = express()
const uuid = require('uuid/v4')

// app.get("/", (req, res) => {
//     res.send("I'm making a server")
// })
// app.get("/something", (req, res) => {

//     res.send("Hello World")
// })

let people = [ 
    {
    name: "Michelle",
    age: 50,
    _id: uuid()
    },
    {
    name: "Charlotte",
    age: 34,
    _id: uuid()
    },
    {
    name: "Jessie",
    age: 33,
    _id: uuid()
    },
]
//middleware:
app.use(express.json())

// GET ALL (Collection)
app.get("/people", (req, res) => {
    res.send(people)
})

// GET ONE (Resource)

app.get('/people/:_id', (req, res) => {
    const ID = req.params._id
    const foundPerson = people.find(person => person._id === ID)
    res.send(foundPerson)
})

// POST - Add one
app.post('/people/', (res, req) => {
    req.body._id = uuid()
    people.push(req.body)
    res.send(req.body)
})

// DELETE - Delete one
app.delete('/people/:_id', (req, res) => {
    const updatedPeople = people.filter(person => person._id !== req.params._id)
    people = updatedPeople
    res.send(people)
})

// PUT - Update one
app.put('/people/:id', (req, res) => {
    const foundPerson = people.find(person => person._id !== req.params._id)
    Object.assign(foundPerson, req.body)
    res.send(foundPerson)
})



app.listen(5000, () => {
    console.log("Server is running on port 5000")
})

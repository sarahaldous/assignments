const express = require('express')
const bountyRouter = express.Router()
const uuid = require('uuid/v4')

let bounty = [
    {
        firstName: "Zam",
        lastName: "Wesell",
        living: true,
        bountyAmount: 1,
        type: "Sith",
        _id: uuid(4)
    },
    {
        firstName: "Dengar",
        lastName: "",
        living: true,
        bountyAmount: 1,
        type: "Jedi",
        _id: uuid(4)
    },
    {
        firstName: "IG-",
        lastName: "88",
        living: false,
        bountyAmount: 1,
        type: "Sith",
        _id: uuid(4)
    },
    {
        firstName: "Asajj",
        lastName: "Ventress",
        living: false,
        bountyAmount: 1,
        type: "Jedi",
        _id: uuid(4)
    },
    {
        firstName: "Embo",
        lastName: "",
        living: false,
        bountyAmount: 1,
        type: "Sith",
        _id: uuid(4)
    },
    {
        firstName: "Jango",
        lastName: "Fett",
        living: false,
        bountyAmount: 1,
        type: "Jedi",
        _id: uuid(4)
    },
    {
        firstName: "Bossk",
        lastName: "",
        living: false,
        bountyAmount: 1,
        type: "Sith",
        _id: uuid(4)
    },
    {
        firstName: "Aura",
        lastName: "Sing",
        living: true,
        bountyAmount: 1,
        type: "Jedi",
        _id: uuid(4)
    },
    {
        firstName: "Boba",
        lastName: "Fett",
        living: true,
        bountyAmount: 1,
        type: "Sith",
        _id: uuid(4)
    },
    {
        firstName: "Cad",
        lastName: "Bane",
        living: true,
        bountyAmount: 1,
        type: "Jedi",
        _id: uuid(4)
    }
]
bountyRouter.get('/search', (req, res) => {
    const { isAlive, type } = 
    req.query
    if(isAlive && type){
        const foundBounty = bounty.filter(bounty => {
            if(bounty.living.toString() === isAlive &&
            bounty.type.toLowerCase() === type.toLowerCase()){
                return bounty
            }
        })
        res.send(foundBounty)
    } else if (isAlive){
        const foundBounty = bounty.filter(bounty => {
            if(bounty.living.toString() === isAlive) {
                return bounty
            }
        })
        res.send(foundBounty)
    } else if (type){
        const foundBounty = bounty.filter(bounty => {
            if(bounty.type.toLowerCase() === type.toLowerCase()){
                return bounty
            }
        })
        res.send(foundBounty)
    }
})

bountyRouter.route('/')
.get((req, res) => {
    res.send(bounty)
})
.post((req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounty.push(newBounty)
    res.send(newBounty)
})

bountyRouter.route('/:_id')
    .get((req, res) => {
        const foundBounty = bounty.find(bounty => bounty._id === req.params._id)
        res.send(foundBounty)
    })
    .put((req, res) => {
        const foundBounty = 
        bounty.find(bounty => bounty._id === req.params._id)
        Object.assign(foundBounty, req.body)
        res.send(foundBounty)
    })
    .delete((req, res) => {
        const updatedDB = 
        bounty.filter(user => user._id !== req.params._id)
        bounty = updatedDB
        res.send("Target eliminated")
    })
 

module.exports = bountyRouter
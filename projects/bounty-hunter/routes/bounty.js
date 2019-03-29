const express = require('express')
const bountyRouter = express.Router()
const uuid = require('uuid/v4')
const Bounty = require('../models/Bounty.js')


// let bounty = [
//     {
//         firstName: "Zam",
//         lastName: "Wesell",
//         living: true,
//         bountyAmount: 1,
//         type: "Sith",
//         _id: uuid(4)
//     },
//     {
//         firstName: "Dengar",
//         lastName: "",
//         living: true,
//         bountyAmount: 1,
//         type: "Jedi",
//         _id: uuid(4)
//     },
//     {
//         firstName: "IG-",
//         lastName: "88",
//         living: false,
//         bountyAmount: 1,
//         type: "Sith",
//         _id: uuid(4)
//     },
//     {
//         firstName: "Asajj",
//         lastName: "Ventress",
//         living: false,
//         bountyAmount: 1,
//         type: "Jedi",
//         _id: uuid(4)
//     },
//     {
//         firstName: "Embo",
//         lastName: "",
//         living: false,
//         bountyAmount: 1,
//         type: "Sith",
//         _id: uuid(4)
//     },
//     {
//         firstName: "Jango",
//         lastName: "Fett",
//         living: false,
//         bountyAmount: 1,
//         type: "Jedi",
//         _id: uuid(4)
//     },
//     {
//         firstName: "Bossk",
//         lastName: "",
//         living: false,
//         bountyAmount: 1,
//         type: "Sith",
//         _id: uuid(4)
//     },
//     {
//         firstName: "Aura",
//         lastName: "Sing",
//         living: true,
//         bountyAmount: 1,
//         type: "Jedi",
//         _id: uuid(4)
//     },
//     {
//         firstName: "Boba",
//         lastName: "Fett",
//         living: true,
//         bountyAmount: 1,
//         type: "Sith",
//         _id: uuid(4)
//     },
//     {
//         firstName: "Cad",
//         lastName: "Bane",
//         living: true,
//         bountyAmount: 1,
//         type: "Jedi",
//         _id: uuid(4)
//     }
// ]
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
    Bounty.find((err, bounties) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(bounties)
    })
    
})
.post((req, res) => {
    const newBounty = new Bounty(req.body)
    console.log(newBounty)
    newBounty.save((err, newBountyObj) => {
        if(err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(newBountyObj)
    })
})

bountyRouter.route('/:_id')
    .get((req, res) => {
        Bounty.findOne({_id: req.params._id}, (err, foundBounty) => {
            if(err){
                res.stagus(500)
                return res.send(err)
            }
            return res.status(200). send(foundBounty)
        })
      
    })
    .put((req, res) => {
        Bounty.findOneAndUpdate(
            {_id: req.params._id}, req.body, {new: true}, 
            (err, updatedBounty) => {
                if(err){
                    res.status(500)
                    return res.send(err)
                }
                return res.status(201).send(updatedBounty)
            }
        )
        
    })
    .delete((req, res) => {
        console.log(req.params._id)
        Bounty.findOneAndRemove({_id:
        req.params._id}, (err, deletedBounty) => {
            if(err){
                res.status(500)
                return res.send(err)
            }
            return res.status(202).send(`Successfully deleted target entitled ${deletedBounty.firstName}`)
        })
       
    })
 

module.exports = bountyRouter
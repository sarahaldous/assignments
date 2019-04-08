// const express = require('express')
// // const Weather = require('../models/user.js')
// const weatherRouter = express.Router()
// const Locations = require('../models/Location.js')


// // Add a location to the user's saved locations
// locationRouter.post('/:userID', (req, res, next) => {
//    const newLocation = new Location(req.body)
//    newLocation.user = req.params.userID
//    newLocation.save((err, userLocation) => {
//        if(err){
//            res.status(500)
//            return next(err)
//        }
//        return res.status(201).send(userLocation)
//    })
// })

// //Delete a user's saved location
// weatherRouter.delete("/:_id", (req, res, next) => {
//    Locations.findOneAndRemove({_id: req.params._id}, (err, deletedLocation) => {
//        if(err) {
//            res.status(500)
//            return next(err)
//        }
//        return res.status(202).send(`${deletedLocation.title} removed.`)
//    })
// })

// module.exports = locationRouter
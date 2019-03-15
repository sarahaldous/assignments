const mongoose = require('mongoose')
const Schema = mongoose.Schema


const todoSchema = new Schema ({
    title: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
        // default: "Hello"  <- this would be possible if it weren't required and you wanted it to generate something if they don't put something
    },
    description: String,
    isCompleted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})



module.exports = mongoose.model(Todo)
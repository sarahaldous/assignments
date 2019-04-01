const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    summary: String,
    imgUrl: {
        type: String,
        default: "https://www.strongertogether.coop/sites/default/files/styles/article_node/public/wp-content/uploads/2015/04/Radishes2_0.jpg?itok=33SXoOsp"
    },
    votes: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    thread: {
        type: String,
        enum: ["recipes", "entertainment", "news", "gardening", "culture", "science", "chocolate", "weather"],
        required: true
    },
    comments: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        timeStamp: {
            type: Date,
            default: Date.now
        }
    }],
    timeStamp: {
        type: Date,
        default: Date.now
    },
    tags: [{
        type: String,
        default: []
    }]
})

module.exports = mongoose.model("Post", postSchema)
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const favLocation = new Schema({
    favLocations: [{
        city: "",
        state: "",
        latitude: "",
        longitude: ""
    }]
})

module.exports = mongoose.model("FavLocations", FavLocations)
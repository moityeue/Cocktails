const mongoose = require("mongoose")
const {Schema} = mongoose

let RatingSchema = new Schema({
    username: {
        type: String
    },
    firstName: {
        type: String
    },
    age: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
},{
    collection: "rating"
}, {
    versionKey: "_somethingElse"
})

module.exports = mongoose.model("rating", RatingSchema)
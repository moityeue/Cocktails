const express = require("express")
const ratingRoute = express.Router()

let RatingModel = require("../models/rating")

ratingRoute.route("/").get((req, res) => { 
    RatingModel.find((error,data) => {
        if (error) {
            return next(error)
        }else {
            res.json(data)
        }
    })
})

module.exports = ratingRoute
let express = require('express'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  database = require('./dataBase'),
  bodyParser = require('body-parser')

  mongoose.Promise = global.Promise
  mongoose.connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("Database connected")
  },
  error => {
    console.log("Database could't be connected to :" + error)
  }
)

const ratingApi = require('../back-end/routes/rating.route')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ 
    extended: false
}))

app.use('/api', ratingApi)

const port = process.env.PORT|| 4000
const server = app.listen(port, () => {
    console.log("Starting server on port " + port)
})

app.use(function (err, req, res, next){
    console.error(err.message)
    if (!err.statusCode) err.statusCode = 500
    res.statut(err.statusCode).send(err.message)
})


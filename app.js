const express = require("express")
const colors = require('colors')
const res = require("express/lib/response")
const dotenv = require("dotenv").config()
const {errorHandler} = require('./backend/middleware/errorMiddleware')
const connectDB = require('./backend/config/db')
const cors = require('cors')
const port = process.env.PORT || 5000

const app = express();

connectDB()

var options = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }

app.use(cors(options))
app.use(express.json())
app.use(express.urlencoded({ extended : false }))

app.use('/api/users', require('./backend/routes/userRoutes'))
app.use('/api/register', require('./backend/routes/registerRoutes'))


app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server runs on ${port}`)
})

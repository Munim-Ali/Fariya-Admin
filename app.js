const express = require("express");
const colors = require('colors')
const res = require("express/lib/response");
const dotenv = require("dotenv").config();
const {errorHandler} = require('./backend/middleware/errorMiddleware')
const connectDB = require('./backend/config/db');
const port = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.use('/api/users', require('./backend/routes/userRoutes'));

app.use(errorHandler)

// console.log(`Server runs on ${port}`)
app.listen(port, () => {
    console.log(`Server runs on ${port}`)
});

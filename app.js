const express = require("express");
const res = require("express/lib/response");
const dotenv = require("dotenv").config;
const {errorHandler} = require('./backend/middleware/errorMiddleware')
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.use('/api/users', require('./backend/routes/userRoutes'));

app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server runs on ${port}`)
});

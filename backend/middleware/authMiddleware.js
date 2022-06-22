const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const Person = require('../models/registerModel')

const protect = asyncHandler (async (res, req, next) => {
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            //Get token from header
            token = req.headers.authorization.split(' ')[1]

            //verify Token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //Get person from the token
            req.Person = await Person.findById(decoded.id).select('-password')

            next()
        }catch(error){
            console.log(error)
            res.status(401)
            throw new Error('Not Authorized')
        }
    }

    if(!token){
        res.status(401)
        throw new Error('Not Authorized, No token')
    }
})

module.exports = {protect}
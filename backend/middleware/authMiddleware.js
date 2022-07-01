const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const Person = require('../models/registerModel')

const protect = asyncHandler (async (res, req, next) => {
    let token
    const authHeader=req.get('Authorization')

    if(authHeader){
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
            error.statusCode=401
            throw new Error('Not Authorized')
        }
    }

    if(!token){
        const err=new Error("NOT AUTHENTICATE")
        err.statusCode=401
        throw err
    }
})

module.exports = {protect}
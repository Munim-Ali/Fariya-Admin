const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Person = require('../models/registerModel') 

//@desc Register New person for Dashboard
//@routes POST /api/register
//@access public

const registerPerson = asyncHandler ( async(req, res) => {
    const { username, email, password } = req.body
    if(!username || !email || !password){
        res.status(400)
        throw new Error('Please enter all fields')
    }
    //Check if user exist
    const userExist = await Person.findOne({username})
    if(userExist){
        res.status(400)
        throw new Error('User already registered')
    }
    //Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)
    //create user
    const person = await Person.create({
        username,
        email,
        password: hashPassword,

    })
    if(person){
        res.status(201).json({
            _id: person.id,
            name: person.username,
            email: person.email,
            token: generateToken(person._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }

})
//@desc Authenticate person for Dashboard
//@routes GET /api/register/login
//@access public

const loginPerson = asyncHandler ( async (req, res) => {
    const {username, password} = req.body
    const personUserName = await Person.findOne({username})
    if(personUserName && (await bcrypt.compare(password, personUserName.password))){
        res.json({
            _id: personUserName.id,
            name: personUserName.username,
            email: personUserName.email,
            password: personUserName.password,
            token: generateToken(personUserName._id)
        })
    } else{
        res.status(400)
        throw new Error('Invalid Credentials')
    }
    // res.json({ message: 'Login User' })
})
//@desc Get person data person for Dashboard
//@routes GET /api/register/me
//@access private

const getPerson = asyncHandler (async (req, res) => {
    const {_id, username, email } = await Person.findById(req.Person.id)
    res.status(200).json({
        id: _id,
        username,
        email,
    })  
})






//Generate JWT
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}
module.exports = {
    registerPerson,
    loginPerson,
    getPerson,
}
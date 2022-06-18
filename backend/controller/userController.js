const asyncHandler = require('express-async-handler')
const user = require('../models/usersModel');


//@desc Get Users
//@routes GET /api/users
//@access Privates
const getUsers = asyncHandler (async (req, res) =>{
    const users = await user.find();
    res.status(200).json(users);
})



//@desc Set Users
//@routes POST /api/users/:id
//@access Privates
const setUsers = asyncHandler (async (req, res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field');
    }
    
    const users = await user.create({
        name: req.body.text,
        cnic: req.body.text
    })
    res.status(200).json(users);
    
})



//@desc Update Users
//@routes GET /api/users/:id
//@access Privates
const updateUsers = asyncHandler (async (req, res) =>{
    res.status(200).json({message: `Update users ${req.params.id}`});
})



//@desc Delete Users
//@routes Delete /api/users/:id
//@access Privates
const deleteUsers = asyncHandler (async (req, res) =>{
    res.status(200).json({message: `Delete users ${req.params.id}`});
})

module.exports = {
    getUsers, 
    setUsers,
    updateUsers,
    deleteUsers

}
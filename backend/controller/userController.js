const asyncHandler = require('express-async-handler')
//@desc Get Users
//@routes GET /api/users
//@access Privates
const getUsers = asyncHandler (async (req, res) =>{
    res.status(200).json({message: 'Get users'});
})



//@desc Set Users
//@routes POST /api/users/:id
//@access Privates
const setUsers = asyncHandler (async (req, res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field');
    }
    res.status(200).json({message: 'Set users'});
    
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
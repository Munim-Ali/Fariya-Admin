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
    // if(!req.body.text){
    //     res.status(400)
    //     throw new Error('Please add a text field');
    // }
    
    const users = await user.create({
        name: req.body.name,
        father_name: req.body.father_name,
        cnic: req.body.cnic,
        mobileNumber_1: req.body.mobileNumber_1,
        mobileNumber_2: req.body.mobileNumber_2,
        address: req.body.address,
        area: req.body.area,
        package: req.body.package,
        subDealer: req.body.subDealer,
        monthly: req.body.monthly,
        collector: req.body.collector,
        status: req.body.status

    })
    res.status(200).json(users);
    
})



//@desc Update Users
//@routes GET /api/users/:id
//@access Privates
const updateUsers = asyncHandler (async (req, res) =>{
    const users = await user.findOne(req.params.name);
    if(!users){
        res.status(400)
        throw new Error('User not found!')
    }
    const updatedUsers = await user.findOneAndUpdate(req.params.name, req.body, {
        new: true,
    })
    res.status(200).json(updatedUsers);
})



//@desc Delete Users
//@routes Delete /api/users/:id
//@access Privates
const deleteUsers = asyncHandler (async (req, res) =>{

    const users = await user.findOne(req.params.name);
    if(!users){
        res.status(400)
        throw new Error('User not found!')
    }
    await users.remove();
    res.status(200).json({ name: req.params.name });
})

module.exports = {
    getUsers, 
    setUsers,
    updateUsers,
    deleteUsers

}
const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
        name: {
            type: String,
            required: [true, "Please add the name of user"]
        },
        fatherName: {
            type: String,
            required: [true, "Please add the father name of user"]
        },
        cnic: {
            type: String,
            required: [true, "Please add a CNIC number"]
        },
        mobileNumber_1: {
            type: String,
            required: [true, "Please add a mobile number"]
        },
        mobileNumber_2: {
            type: String,
            required: [false, "Please add a CNIC number"]
        },
        address: {
            type: String,
            required: [true, "Please add a Address"]
        },
        area: {
            type: String,
            required: [true, "Please add a area"]
        },
        userPpackage: {
            type: String,
            required: [true, "Please add a Package"]
        },
        subDealer: {
            type: String,
            required: [false, "Please add a Sub Dealer"]
        },
        monthly: {
            type: String,
            required: [true, "Please add a Monthly amount"]
        },
        collector: {
            type: String,
            required: [true, "Please add the payment collector name"]
        },
        userStatus: {
            type: Boolean,
            required: [true, "Please select status of users"],
            index: true
        },
        
    },
    {
        timestamps: true, 
    }
) 
module.exports = mongoose.model('user', userSchema)
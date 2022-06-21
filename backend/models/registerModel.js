const mongoose = require('mongoose')
const registerSchema = mongoose.Schema ({
    username: {
        type: String,
        required: [true, 'Please Enter you user name'],
        unique: true
    },email: {
        type: String,
        required: [true, 'Please Enter your email address']
    },
    password: {
        type: String,
        required: [true, 'Please add a Password']
    }

},{
    timestamps: true
})
module.exports = mongoose.model('Regitser', registerSchema)
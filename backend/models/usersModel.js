const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
        name: {
            type: String,
            required: [true, "Please add the name of user"]
        },
        father_name: {
            type: String,
            required: [true, "Please add the father name of user"]
        },
        cnic: {
            type: String,
            required: [true, "Please add a CNIC number"]
        }
    },
    {
        timestamps: true, 
    }
) 
module.exports = mongoose.model('user', userSchema)
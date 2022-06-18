const mongoose = require('mongoose');
const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect("mongodb+srv://fariya:acme123@fariyalshusers.jsgkj.mongodb.net/?retryWrites=true&w=majority");
        console.log(`MONGODB Connected ${conn.connection.host}`.cyan.underline)
    } catch (error){
        console.log(error)
        process.exit(1);
    }
}

module.exports = connectDB;
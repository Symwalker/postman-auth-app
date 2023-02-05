const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true,
        unique : true
    },
    password:{
        type : String,
        required : true
    },
    mobile_Number:{
        type : String,
        required : true
    },
    created_on:{
        type : Date,
        default : Date.now
    }
})



const userModel = mongoose.model("user" , userSchema)
module.exports = userModel
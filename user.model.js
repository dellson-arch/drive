const mongoose = require('mongoose');
 
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        reuired :true,
        trim:true ,
        lowercase: true ,
        unique :true,
        minlength:[3, "username must be at least 3 characters long"]
    },
    email:{
        type:String,
        reuired :true,
        trim:true ,
        lowercase: true ,
        unique :true,
        minlength:[3, "username must be at least 3 characters long"]
    },
    password:{
        type:String,
        required :true,
        trim:true ,
        minlength:[8, "password must be at least 8 characters long"]
    }
})

const user = mongoose.model('User',userSchema);
module.exports = user;
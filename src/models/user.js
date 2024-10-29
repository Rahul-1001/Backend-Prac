const mongoose =require("mongoose")
const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true
    },
    lastname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    age:{
        type:String
    }

})

const User=mongoose.model("User",userSchema)
module.exports=User;

// mongoose.exports=mongoose.model("User",userSchema)
//name of the model is user
//2nd is schema i.e==userschema
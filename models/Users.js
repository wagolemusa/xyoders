const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
        fullname: {
            type: String,
            require:true,
            unique: true
        },
        username:{
            type:String,
            require:true,
            unique: true
        },
        email:{
            type:String,
            require:true,
            unique:true
        },
        password:{
            type:String,
            require:true,
        },
        profilePic:{
            type:String,
            default: "",
        },
    },{timestamps: true }
);
module.exports = mongoose.model("User", UserSchema)

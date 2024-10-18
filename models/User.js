const mongoose = require("mongoose");
const userSchema = new mongoose.schema({
    firstname: {
        type:string,
        required:true,
        trim:true,
    },
    lastname: {
        type:string,
        required:true,
        trim:true,
    },
    email:{
        type:string,
        required:true,
        trim:true,
    },
    password:{
        type:string,
        required:true,
        trim:true,
    },
    accountype:{
        type:string,
        required:true,
        enum:["Admin","Student","Instructor "]
    },
    //profile details
    additionaldetails:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"Profile",
    },
    courses:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"Course",
    },
    image:{
        type:string,
        required:true,
    },
    courseProgress:[{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:CourseProgress,
    }],
});

module.exports = mongoose.model("User",userSchema);

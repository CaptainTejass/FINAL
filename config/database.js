const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = ()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewParser:true,
        useUnifiedTopology:true,
    })
    .then(()=> console.log("connected"))
    .catch((error)=>{
        console.log("connection failed");
        console.error(error);
        process.exit(1);
    })
}
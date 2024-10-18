const mongoose = require("mongoose");
const profileSchema = new mongoose.schema({
    gender: {
        type:string,
        required:true,
        
    },
    dob: {
        type:string,
        required:true,
        
    },
    about:{
        type:string,
        trim:true,
    },
    contactNumber:{
        type:Number,        
        trim:true,
    },
    
    
});

module.exports = mongoose.model("Profile",profileSchema);

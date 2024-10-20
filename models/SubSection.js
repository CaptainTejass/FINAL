const mongoose = require("mongoose");
const SubSectionSchema = new mongoose.schema({
    title: {
        type:string,
        required:true,
        
    },
    timeDuration: {
        type:Number,       
        
    },
    description:{
        type:string,
        trim:true,
    },
    videoUrl:{
        type:string,        
        
    },
    
    
});

module.exports = mongoose.model("SubSection",SubSectionSchema);

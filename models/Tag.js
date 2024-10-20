const mongoose = require("mongoose");
const tagSchema = new mongoose.schema({
    name: {
        type:string,
        required:true,
        
    },
    description: {
        type:string,
        required:true,
        trim:true,
    },
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
    },
      
});

module.exports = mongoose.model("Tag",tagSchema);

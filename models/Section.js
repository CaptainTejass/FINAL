const mongoose = require("mongoose");
const SubSectionSchema = new mongoose.schema({
    sectionname: {
        type:string,
        required:true,
        
    },
    subSection: [{
        type:mongoose.Schema.Types.ObjectId, 
        ref:subSection,
        required:true,       
        
    }],
    
    
    
});

module.exports = mongoose.model("Profile",profileSchema);

const mongoose = require("mongoose");
const CourseProgress = new mongoose.schema({
    courseID: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
        
    },
    completedVideos: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubSection",
    }]
       
    
});

module.exports = mongoose.model("Profile",profileSchema);

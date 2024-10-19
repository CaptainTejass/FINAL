const mongoose = require("mongoose");
const CourseSchema = new mongoose.schema({
    courseName: {
        type:string,
        required:true,
        
    },
    courseDesc: {
        type:Number,       
        
    },
    instructor:{
        type:string,
        trim:true,
    },
    WhatYouWillLearn:{
        type:string,          
    },
    courseContent:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:Section,
    }],
    ratingAndReviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:RatingAndReview,
    }],
    price:{
        type:Number,        
    },
    thumbnail:{
        type:string,
    },
    tag:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Tag,        
    },
    studentEnrolled:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
    }]
    
    
});

module.exports = mongoose.model("Profile",profileSchema);

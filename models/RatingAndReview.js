const mongoose = require("mongoose");

const ratingAndreviewSchema = new mongoose.schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
});

module.exports = mongoose.model("RatingAndReview",ratingAndreviewSchema);
const mongoose = require("mongoose");
const OTPSchema = new mongoose.schema({
    email: {
        type:string,
        required:true,
        
    },
    otp: {
        type:string,
        required:true,
        
    },
    timestamp:{
        type:Date,
        default:Date.now(),
        expires: 5*60,
    },        
    
});
async function sendVerificationemail(email,otp) {
  try{
      const mailResponse = await mailSender(email,"verification email",otp);
      console.log("successfully mail sent:",mailResponse)
  }
  catch(error){
      console.log("error occured while sending forgot password mail");
      throw error;
  }
}
OTPSchema.pre("save",async function(next){
    await sendVerificationemail(this.email,this.otp);
    next();
})

module.exports = mongoose.model("OTP",OTPSchema);

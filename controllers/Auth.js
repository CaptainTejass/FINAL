const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");

//signIN
//signUP
//sendOTP(jab tak otp verify nhi hoga sign up nhi kr sakte)
exports.SendOTP = async(req,res)=>{
    try{  
        const{email} = req.body;
        const CheckUserPresent = await User.findOne.({email});
        //if user exists
    
        if(CheckUserPresent){
            return res.status(401).json({
                success:false,
                message:'User already exist',
            })            
        }
        var Otp = otpGenerator.generate(4,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
        })
        console.log("otpgeerated",OTP);
        //check for unique otp (brute force logic update it please in future)
        const result = await OTP.findOne({otp:Otp});
        while(result){
            Otp = otpGenerator.generate(4,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false,
            });
            result = await OTP.findOne({otp:Otp});
        }
        const otpPayload = {email,Otp};
        //create an entry for DB 
        const otpBody = await OTP.create(otpPayload);
        console.log("otp entry craeted");
        
        res.status(200).json({
            success:false,
            message:"otp entry created in db",
            Otp,

        })
    }
    catch(error){
        
    }
};
//changepasswrd 
//forgot password
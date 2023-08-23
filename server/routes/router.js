// const express = require("express");
// const router = new express.Router();
// const userdb = require("../models/User");
// var bcrypt = require("bcrypt");
// const authenticate = require("../middleware/authenticate");
// const nodemailer = require("nodemailer");
// const jwt  = require("jsonwebtoken");
// const { reSignToken } = require('../utils/auth');

// const keysecret = process.env.SECRET_KEY

// const transporter = nodemailer.createTransport({
//   service:"gmail",
//   auth:{
//       user:process.env.EMAIL,
//       pass:process.env.PASSWORD
//   }
// }) 

// router.get("/validuser",authenticate,async(req,res)=>{
//   try {
//       const ValidUserOne = await userdb.findOne({_id:req.userId});
//       res.status(201).json({status:201,ValidUserOne});
//   } catch (error) {
//       res.status(401).json({status:401,error});
//   }
// });

// router.post("/sendpasswordlink",async(req,res)=>{

//   const {email} = req.body;

  
//   if(!email){
//       res.status(401).json({status:401,message:"Enter Your Email"})
//   }

//   try {
//       const userfind = await userdb.findOne({email:email});
    
//       // token generate for reset password
//       const token = jwt.sign({_id:userfind._id},keysecret,{
//           expiresIn:"120s"
//       });
//       console.log("This is the token",token)

//       const setusertoken = await userdb.findByIdAndUpdate(
//         {_id:userfind._id},
//         {verifytoken:token},
//         {new:true});


//       if(setusertoken){
//           const mailOptions = {
//               from:process.env.EMAIL,
//               to:email,
//               subject:"Sending Email For password Reset",
//               text:`This Link Valid For 2 MINUTES http://localhost:3001/forgotpassword/${userfind.id}/${setusertoken.verifytoken}`
//           }

//           transporter.sendMail(mailOptions,(error,info)=>{
//               if(error){
//                   console.log("error",error);
//                   res.status(401).json({status:401,message:"email not send"})
//               }else{
//                   console.log("Email sent",info.response);
//                   res.status(201).json({status:201,message:"Email sent Succesfully"})
//               }
//           })

//       }

//   } catch (error) {
//       res.status(401).json({status:401,message:"invalid user"})
//   }

// });

// module.exports = router;
const UserEvents=require('../Models/UserEvents')
const {Op}=require("sequelize")
const User=require('../Models/UserModel')

var path=require("path");
//////////////////Mail///////////

var nodemailer = require('nodemailer');
const Mail=(to,event)=>{
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Prashant.teachies@gmail.com',
    pass: 'jqljmqcdiotionzw'
  }
});

var mailOptions = {
  from: 'prashant.teachies@gmail.com',
  to: `${to}`,
  subject: 'thanks for registration',
  text: `Thank you for registring in ${event}`,
  attachments: [{
    filename: 'Rule_Book.pdf',
    path:path.join(__dirname,'/Rule_Book.pdf'),
    contentType: 'application/pdf',
    
  }],
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

/////GetUser////////
const getUser=async(req,res)=>{
  
    res.send(req.id);
    
   
}
const eventRegister=async(req,res)=>{
   
    const {id,event}=req.body;
   const MobileNo=req.body.number;
   try {
    const user= await UserEvents.findOne({
        where:{
            [Op.and]:[{UserId:id},{event:event}]
        }
    })
    
    if(user){
        res.send("Already Registered for this Event")
    }
    else{
        await UserEvents.create({
            UserId:id,
            event:event,
            MobileNo:MobileNo,
        })
       const muser= await User.findOne({
            where:{
                id:id
            }
        })
        // console.log(muser);
       Mail(muser.email,event);
        res.send("Sucessfully Registered Thank You so Much")
    }}
    catch (error) {
      // console.log(error);
    res.send("Server Error")
   } }
    

module.exports={eventRegister,getUser};
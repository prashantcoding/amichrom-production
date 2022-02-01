var jwt=require('jsonwebtoken');
const db = require('../Database/db_connection');
const UserEvent = require('../Models/UserEvents');
const {Op}=require("sequelize")
const checkRegister=async(req,res,next)=>{
       try{
           console.log("CheckRunning")
        const id=req.body.id;
        const event=req.body.event;
        const usr=await UserEvent.findOne({[Op.and]:[{UserId:id},{event:event}]});
        if(usr){
            req.body.LeaderId=id;
            next();
        }
        
        else{
            res.send("Please Register For Event First ")
        };
        
        
       }
     catch (error) {
        console.log(error);
        res.send("please login ");
    }}
  

module.exports=checkRegister;
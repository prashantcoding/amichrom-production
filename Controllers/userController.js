const db = require('../Database/db_connection');
const User=require('../Models/UserModel')
const {Op}=require("sequelize")
var jwt=require('jsonwebtoken')

////////////////LOGIN REQUEST/////////////

////////////////////Register User&&Login User///////////////////
const RegisterUser=async(req,res)=>{
    // console.log(req.body);
   
    const{id,email,name}=req.body;
  
    const usr=await User.findOne({where:{id:id}});
    try {
        if(usr){
            
            const data={
                user:{
                    id:id
                }
             }
            const Auth_token=jwt.sign(data,process.env.JWT_SECRET);
            res.json({Auth_token}); 
        }
        else{
           await User.create({id,email,name})
           const data={
               user:{
                   id:user.id
               }
            }
           const Auth_token=jwt.sign(data,process.env.JWT_SECRET);
          
           res.json({Auth_token}); 
        } 
    } catch (error) {
        res.send("server Error");
    }
    

}
/////GET a user ////////////////
const authUser=async(req,res)=>{
    try {
        const user=await User.findbyId(userId).select();
    } catch (error) {
        res.send("Internal Server Error");
    }
}
module.exports ={authUser,RegisterUser};

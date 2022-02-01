var jwt=require('jsonwebtoken');
const db = require('../Database/db_connection');
const User=require('../Models/UserModel')
const fetchuser=async(req,res,next)=>{
    // console.log("Mid")
    //get the user from the jwt token and append id to usr applicaiton
    const token=req.header('Auth_token');
    
    if(!token){
       
        res.status(401).send({error:"please login "});
    }
    else{
    try {
        // console.log("Middleware Admin RUnning");
        // console.log(req.body);
        const data = await jwt.verify(token,process.env.JWT_SECRET)
        const id=data.user.id;
        const usr=await User.findOne({where:{id:id}});
        
        if(!usr.isadmin) res.status(401).send("Not Admin") 
        else {req.body.id=data.user.id;
        
        next();}
    } catch (error) {
        // console.log(error);
        res.status(401).send("please login ");
    }}
    
}
module.exports=fetchuser;
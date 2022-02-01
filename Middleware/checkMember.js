var jwt=require('jsonwebtoken');
const db = require('../Database/db_connection');
const UserEvent = require('../Models/UserEvents');
const {Op}=require("sequelize");
const Teams = require('../Models/TeamModel');
const checkMember=async(req,res,next)=>{
       
     try{  
        //  console.log("CheckRunning")
        const teamid=req.body.team_id;
        const event=req.body.event;
        const memberid=req.body.id;
        
        const usr=await UserEvent.findOne({[Op.and]:[{UserId:memberid},{event:event}]});
       
        if(!usr){
            res.send("Register For Event First");
        }
        else{
            // console.log("comes here in member")
        const member=await Teams.findOne({[Op.and]:[{team_id:teamid},{event:event}]})

                if(member.LeaderId===memberid){
                    
                    res.send("You are Leader of this Team You Cant Register Yourself ")
                }
                else{
                    // console.log("its come in else part")
                    req.body.team_name=member.TeamName;
                    next();
           }
        }
        console.log("HII");
        
        
        
       }
     catch (error) {
        console.log(error);
        res.send({error:"please login "});
    }}
  

module.exports=checkMember;
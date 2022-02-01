const UserEvents = require("../Models/UserEvents");
const { Op } = require("sequelize");
const member=require("../Models/MemberModel");
const Team = require("../Models/TeamModel");
var uniqid = require("uniqid");

const CreateTeam = async(req, res) => {
  const team_id = uniqid();
  const { LeaderId, TeamName, event } = req.body;
  // console.log(req.body);
  ////create Team
  ///api/RegisterTeam;
  try {
    const user= await Team.findOne({
      where:{
          [Op.and]:[{LeaderId:LeaderId},{event:event}]
      }
    })
    if(user) res.send("Already Created A Team")
    else{Team.create({ LeaderId, team_id, team_id, TeamName, event });
    res.send(`Team Sucessfully Created Your Team ID is ${team_id}`);}
  } catch (error) {
    res.send("Internal Server Error")
    // console.log(error);
  }
};
const JoinTeam = async(req, res) => {
  
    // console.log("its running JoinTeam");
  const { id, team_id, event } = req.body;
  // console.log(req.body);
  const TeamID=team_id;
  const MemberId=id
  const name=req.body.team_name;
  ////create Team
  ///api/RegisterTeam;
  try {
    const user= await member.findOne({
      where:{
          [Op.and]:[{MemberId:MemberId},{event:event}]
      }
    })
    if(user) {
       
      res.send(`Already Joined This Event Team ${name}`)
    
    }
    else{member.create({MemberId, event,TeamID});
    res.send(`Team Sucessfully Joined Your Team ID is ${TeamID}`);}
  } catch (error) {
    res.send("Server Error")
    // console.log(error);
  }
  } 
  

module.exports = { CreateTeam,JoinTeam};

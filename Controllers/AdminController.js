const UserEvents = require("../Models/UserEvents");
const { Op } = require("sequelize");
const User = require("../Models/UserModel");
/////GetUser////////

const getAlluser = async (req, res) => {
  const { id } = req.body;
  try {
    const user = await UserEvents.findAll({ include: { model: User } });
    const data = {
      name: user[0].User.name,
      email: user[0].User.email,
      event: user[0].event,
    };
    res.send(data);
  } catch (error) {
    res.send("Server Eroor");
  }
};
///getting some specific User
const getSomeuser = async (req, res) => {
  
  console.log(req.body);
  // const event=JSON.stringify(req.event).toUpperCase();
  try {
    const user = await UserEvents.findAll({
      include: { model: User },
      where: {
        event:req.body.event,
      },
    });
    // console.log(user);
    if (!user) res.send("NO participants");
    
    const data = {
      name: user[0].User.name,
      email: user[0].User.email,
    };
    // console.log(data);
    res.send(data);
  } catch (error) {
    res.send("Server Eroor");
  }
};

module.exports = { getAlluser, getSomeuser };

const { Sequelize, DataTypes } = require("sequelize"); //importing the sequelize modules;
const db = require("../Database/db_connection");
const UserModel = require("./UserModel");
const Teams = require("./TeamModel");
const Member = db.define(
  "Members",
  {
    MemberId: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    TeamID: {
      
      type:DataTypes.STRING,
      allowNull:false,
     references:{
         model:Teams,
         key:'team_id'
     }
      
    },
    event: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Teams.hasMany(Member);
Member.belongsTo(Teams);

(async () => {
  await db.sync();
})();

module.exports = Member;

//////////////////

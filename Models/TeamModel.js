const { Sequelize, DataTypes } = require("sequelize"); //importing the sequelize modules;
const db = require("../Database/db_connection");
const UserModel = require("./UserModel");
const Teams = db.define(
  "Teams",
  {
    LeaderId: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    team_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    TeamName: {
      type: DataTypes.STRING,
      allowNull: false,
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

(async () => {
  await db.sync();
})();

module.exports = Teams;

//////////////////

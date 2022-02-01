const { Sequelize, DataTypes } = require('sequelize'); //importing the sequelize modules;
const db=require('../Database/db_connection');
const UserModel=require('./UserModel')
const UserEvent=db.define('UserEvent',{
    
    UserId:{
        type:DataTypes.STRING,
        allowNull:false,
       references:{
           model:UserModel,
           key:'id'
       }
    },
    
    event:{
        type:DataTypes.STRING,
        allowNull:true,
        
    },
    MobileNo:{
        type:DataTypes.STRING,
        allowNull:false,
    },
},{
    
        timestamps:false,
    
});
UserModel.hasMany(UserEvent);
UserEvent.belongsTo(UserModel);
(async () => {
    await db.sync();
    
  })();

module.exports=UserEvent;

























//////////////////

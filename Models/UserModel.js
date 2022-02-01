const { Sequelize, DataTypes } = require('sequelize'); //importing the sequelize modules;
const db=require('../Database/db_connection');
const User=db.define('User',{
    id:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        
    },
    isadmin:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
    },
    name:{
        type:DataTypes.STRING,
    
    }
},{
    
    timestamps:false,

});

(async () => {
    await db.sync();
    
  })();

module.exports=User;
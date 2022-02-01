const { Sequelize } = require('sequelize');
const db=new Sequelize('amichroma','root','',{
    host:'localhost',
    dialect:'mysql',
    logging: false, 
}
)

try {
     db.authenticate();
    console.log('connection done');
} catch (error) {
    console.log('error');
}
    
module.exports = db;
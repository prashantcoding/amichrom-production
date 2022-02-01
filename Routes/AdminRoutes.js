const express=require("express");
var router=express.Router();

const {getAlluser, getSomeuser}=require('../Controllers/AdminController')
//getting resgisted users
router.route('/getalluser').get(getAlluser);
router.route('/getsomeuser').post(getSomeuser);
module.exports=router;
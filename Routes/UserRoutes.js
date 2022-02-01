const express=require("express");
var router=express.Router();
const {authUser,RegisterUser}=require('../Controllers/userController');
const {eventRegister}=require('../Controllers/EventController')

router.route('/register').post(RegisterUser);
router.route('/eventRegister').post(eventRegister);
module.exports=router;
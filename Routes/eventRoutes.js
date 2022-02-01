const express=require("express");
var router=express.Router();

const {eventRegister,getUser}=require('../Controllers/EventController')

router.route('/eventRegister').post(eventRegister);
router.route('/getuser').post(getUser);
module.exports=router;
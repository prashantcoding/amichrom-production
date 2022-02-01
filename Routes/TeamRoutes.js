const express=require("express");
var router=express.Router();

const {CreateTeam,JoinTeam}=require('../Controllers/TeamController')

router.route('/teamRegister').post(CreateTeam);
router.route('/joinTeam').post(JoinTeam);
module.exports=router;
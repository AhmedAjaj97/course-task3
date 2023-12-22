const express = require('express');
const router =express.Router();
const UserController=require("../controller/UserController");

router.post('/registering',UserController.SignUpUser);
router.post('/login',UserController.LoginUser);



module.exports=router;
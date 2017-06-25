var router = require('express').Router();
var AuthController = require('./../controllers/auth-controller');


router.get('/register',AuthController.register);

router.get('/login',AuthController.login);

module.exports=router;
var express = require('express');
var router = express.Router();
var userController = require("../controller/user/userController")

/* GET users listing. */
router.post('/Login', userController.Login)

module.exports = router;

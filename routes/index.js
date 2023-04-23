var express = require('express');
var router = express.Router();
var moduleController = require("../controller/module/moduleController")
var userController = require('../controller/user/userController')

//Module APIs
router.post('/Api/createModule',userController.secure,moduleController.createModule)
router.get('/Api/listingModule',userController.secure,moduleController.listingModule)
router.get('/Api/viewModule',userController.secure,moduleController.viewModule)
router.post('/Api/editModule',userController.secure,moduleController.editModule)
router.delete('/Api/deleteModule',userController.secure,moduleController.deleteModule)


// Testing api
router.post('/api',moduleController.api)



module.exports = router;

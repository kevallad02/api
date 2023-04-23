var express = require('express');
var router = express.Router();
var topicController = require("../controller/topic/topicController")
var userController = require("../controller/user/userController")

//Topis APIs
router.post('/createTopic',userController.secure,topicController.createTopic)
router.post('/editTopic',userController.secure,topicController.editTopic)
router.delete('/deleteAllTopic',userController.secure,topicController.deleteAllTopic)

router.get('/viewTopic',userController.secure,topicController.viewTopic)
router.get('/listingTopic',userController.secure,topicController.listingTopic)

router.delete('/deleteTopic',userController.secure,topicController.deleteTopic)
module.exports = router;

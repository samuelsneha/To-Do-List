// Main Routes

const { application } = require('express');//Through vs code during updates
const express = require('express');//requiring the express
const router = express.Router();//connecting the express to router

const homeController = require('../controllers/home'); //directly -> controllers
router.get('/', homeController.main);//accessing the action

router.use('/addtaskroute', require('./addTask')); //on routes -> controllers -> ejs
router.use('/deletetaskroute', require('./deleteTask')); //on routes -> controllers -> ejs

module.exports = router;//exporting
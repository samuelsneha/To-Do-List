const { application } = require('express');//d1
const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home'); //directly -> controllers
router.get('/', homeController.main);

router.use('/addtaskroute', require('./addTask')); //on routes -> controllers -> ejs
router.use('/deletetaskroute', require('./deleteTask')); //on routes -> controllers -> ejs

module.exports = router;
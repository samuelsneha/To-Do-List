//  Routes for adding the task

const express = require('express'); //requiring the express
const router = express.Router(); //connecting the express to router

const addController = require('../controllers/add'); //requiring the add controllers

router.post('/addtaskaction', addController.addtask); //accessing the action
module.exports = router; //exporting

//  Routes for deleting the task

const express = require('express');//requiring the express
const router = express.Router(); //connecting the express to router

const deleteController = require('../controllers/delete'); //requiring the delete controllers

router.post('/deletetaskaction', deleteController.deletetask); //accessing the action

module.exports = router;//exporting
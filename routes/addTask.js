const express = require('express');
const router = express.Router();

const addController = require('../controllers/add');

router.post('/addtaskaction', addController.addtask);
module.exports = router;

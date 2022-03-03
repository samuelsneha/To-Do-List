const express = require('express');
const router = express.Router();

const deleteController = require('../controllers/delete');

router.post('/deletetaskaction', deleteController.deletetask);

module.exports = router;
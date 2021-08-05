var express = require('express');
const controller = require('./controller');

var router = express.Router();

router.get('/get/maker/:id', controller.readMaker);
router.get('/get/ayudante/:id', controller.readAyudante);

module.exports = router;
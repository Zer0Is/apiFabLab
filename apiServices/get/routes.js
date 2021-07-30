var express = require('express');
const controller = require('./controller');

var router = express.Router();

router.post('/get/maker', controller.readMaker);
router.post('/get/ayudante', controller.readAyudante);

module.exports = router;
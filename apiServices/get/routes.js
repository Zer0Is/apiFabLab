var express = require('express');
const controller = require('./controller');

var router = express.Router();

router.get('/get/maker/:rut/:categoria', controller.readMaker);
router.get('/get/ayudante/:rut', controller.readAyudante);

module.exports = router;
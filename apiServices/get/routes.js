var express = require('express');
const controller = require('./controller');

var router = express.Router();

router.post('/get/maker', controller.create)
router.post('/get/ayudante', controller.read)

module.exports = router;
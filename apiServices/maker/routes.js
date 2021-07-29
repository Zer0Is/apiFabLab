var express = require('express');
const controller = require('./controller');

var router = express.Router();

router.post('/maker/create', controller.create)
router.post('/maker/read', controller.read)
router.post('/maker/update', controller.update)
router.post('/maker/delete', controller.delete)

module.exports = router;

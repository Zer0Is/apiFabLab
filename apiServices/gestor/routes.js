var express = require('express');
const controller = require('./controller');

var router = express.Router();

router.post('/gestor/create', controller.create);
router.post('/gestor/read', controller.read);
router.post('/gestor/update', controller.update);
router.post('/gestor/delete', controller.delete);

module.exports = router;
var express = require('express');
var router = express.Router();
var ActivityController = require('../controllers/activity.controller');

router.post('/activities', ActivityController.save);
router.get('/activities/types', ActivityController.getTypes);
router.get('/activities', ActivityController.getAll);
router.get('/activities/:id', ActivityController.getOne);
router.put('/activities/:id', ActivityController.update);
router.put('/seats/:id', ActivityController.updateSeats);
router.delete('/activities/:id', ActivityController.remove);

module.exports = router;
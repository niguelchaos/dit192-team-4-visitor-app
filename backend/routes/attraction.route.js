var express = require('express');
var router = express.Router();
var AttractionController = require('../controllers/attraction.controller');

router.post('/attractions', AttractionController.saveAttraction);
router.get('/attractions', AttractionController.getAttractions);
router.get('/attractions/:id', AttractionController.getAttraction);
//router.patch('/attractions/:id', AttractionController.patchAttraction);
router.put('/attractions/:id', AttractionController.updateAttraction);
router.delete('/attractions/:id', AttractionController.removeAttraction);

module.exports = router;
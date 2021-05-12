var express = require('express');
var router = express.Router();
var GameController = require('../controllers/game.controller');

router.post('/games', GameController.saveGame);
router.get('/games', GameController.getGames);
router.get('/games/:id', GameController.getGame);
//router.patch('/games/:id', GameController.patchGame);
router.put('/games/:id', GameController.updateGame);
router.delete('/games/:id', GameController.removeGame);

module.exports = router;
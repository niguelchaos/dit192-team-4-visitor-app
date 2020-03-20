var express = require('express');
var router = express.Router();

// Return a list of all camels
router.get('/', function(req, res, next) {
    res.json({'camels': 'no camels'})
});

// Handle a request with a parameter
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    id = parseInt(id) + 1;
    res.json({'as int incremented by one': id});
});

module.exports = router;

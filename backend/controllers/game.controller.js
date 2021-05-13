var Game = require('../models/game.model')

// GET method
exports.getGames = async function (req, res, next) {
    var query = req.params.query ? req.params.query : {};
    var pageskip =  (req.query.page ? req.query.page : 1) - 1;
    var limit = parseInt(req.query.limit) ? parseInt(req.query.limit) : 4;
    var totalGames = 0;
    
    Game.count({}, function(err, numOfGames) {
        if (err) { return next(err); }
        totalGames = numOfGames;

        Game.find(query, function(err, games) {
            if (err) { return next(err); }
            res.status(200).json({ status: 200, data: games, totalGames: totalGames, message: 'Successfully retrieved the games.' });
        })
        .skip(pageskip * limit)
        .limit(limit);
    })

}

// GET method
exports.getGame = async function (req, res, next) {
    var id = req.params.id;
    Game.findById(id, function(err, game) {
        if (err) { return next(err); }
        if (game === null) {
            return res.status(404).json({ status: 404, message: 'Game not found'});
        }
        res.status(200).json({ status: 200, data: game, message: 'Successfully retrieved the Game.' });
    });
}

// POST method
exports.saveGame = async function (req, res, next) {
    var game = new Game(req.body);
    game.save(function(err) {
        if (err) { return next(err); }
        res.status(201).json({ status: 201, data: game, message: 'Successfully saved the game' });
    });
}

// DELETE method
exports.removeGame = async function (req, res, next) {
    var id = req.params.id;
    Game.findOneAndDelete({_id: id}, function(err, game) {
        if (err) { return next(err); }
        if (game === null) {
            return res.status(404).json({ status: 404, message: 'Game not found' });
        }
        res.status(200).json({status: 200, data: {"_id": game._id}, message: 'Successfully removed the Game.' });
    });
}

// PUT method
exports.updateGame = async function (req, res, next) {
    let id = req.params.id;
    let params = { 
        name: req.body.name,
        description: req.body.description, 
        price: req.body.price,
        status: req.body.status,
        image: req.body.image
    };
    var unsetParams = [];
    Object.keys(params).forEach(p => { if(params[p] === undefined) unsetParams.push(p)});

    Game.findOneAndUpdate({ _id: id }, [{$set: params}, {$unset: unsetParams}], {new: true, omitUndefined: true}, function(err, game) {
        if (err) { return next(err); }
        if (game === null) {
            return res.status(404).json({ status: 404, message: 'Game was not found' });
        }
        res.status(200).json({ status: 200, data: game, message: 'Game was updated' });
    });
}
var Restaurant = require('../models/restaurant.model')

// GET method
exports.getRestaurants = async function (req, res, next) {
    var query = req.params.query ? req.params.query : {};
    var pageskip =  (req.query.page ? req.query.page : 1) - 1;
    var limit = req.params.limit ? req.params.limit : 2;
    var totalRestaurants = 0;
    
    Restaurant.count({}, function(err, numOfRestaurants) {
        if (err) { return next(err); }
        totalRestaurants = numOfRestaurants;

        Restaurant.find(query, function(err, restaurants) {
            if (err) { return next(err); }
            res.status(200).json({ status: 200, data: restaurants, totalRestaurants: totalRestaurants, message: 'Successfully retrieved the restaurants.' });
        })
        .skip(pageskip * limit)
        .limit(limit);
    })
}

// GET method
exports.getRestaurant = async function (req, res, next) {
    var id = req.params.id;
    Restaurant.findById(id, function(err, restaurant) {
        if (err) { return next(err); }
        if (restaurant === null) {
            return res.status(404).json({ status: 404, message: 'Restaurant not found'});
        }
        res.status(200).json({ status: 200, data: restaurant, message: 'Successfully retrieved the restaurant.' });
    });
}

// POST method
exports.saveRestaurant = async function (req, res, next) {
    var restaurant = new Restaurant(req.body);
    restaurant.save(function(err) {
        if (err) { return next(err); }
        res.status(201).json({ status: 201, data: restaurant, message: 'Successfully saved the restaurant' });
    });
}

// DELETE method
exports.removeRestaurant = async function (req, res, next) {
    var id = req.params.id;
    Restaurant.findOneAndDelete({_id: id}, function(err, restaurant) {
        if (err) { return next(err); }
        if (restaurant === null) {
            return res.status(404).json({ status: 404, message: 'Restaurant not found' });
        }
        res.status(200).json({status: 200, data: {"_id": restaurant._id}, message: 'Successfully removed the Restaurant.' });
    });
}

// PUT method
exports.updateRestaurant = async function (req, res, next) {
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

    Restaurant.findOneAndUpdate({ _id: id }, [{$set: params}, {$unset: unsetParams}], {new: true, omitUndefined: true}, function(err, restaurant) {
        if (err) { return next(err); }
        if (restaurant === null) {
            return res.status(404).json({ status: 404, message: 'Restaurant was not found' });
        }
        res.status(200).json({ status: 200, data: restaurant, message: 'Restaurant was updated' });
    });
}
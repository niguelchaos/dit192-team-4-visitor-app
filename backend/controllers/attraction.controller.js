var Attraction = require('../models/attraction.model')

// GET method
exports.getAttractions = async function (req, res, next) {
    var query = req.params.query ? req.params.query : {};
    var pageskip =  (req.query.page ? req.query.page : 1) - 1;
    var limit = req.params.limit ? req.params.limit : 4;
    var attractionCount = Attraction.count();

    console.log(pageskip * limit);
    
    Attraction.find(query, function(err, attractions) {
        if (err) { return next(err); }
        res.status(200).json({ status: 200, data: attractions, message: 'Successfully retrieved the attractions.' });
    })
    .skip(pageskip * limit)
    .limit(limit);
}

// GET method
exports.getAttraction = async function (req, res, next) {
    var id = req.params.id;
    Attraction.findById(id, function(err, attraction) {
        if (err) { return next(err); }
        if (attraction === null) {
            return res.status(404).json({ status: 404, message: 'Attraction not found'});
        }
        res.status(200).json({ status: 200, data: attraction, message: 'Successfully retrieved the attraction.' });
    });
}

// POST method
exports.saveAttraction = async function (req, res, next) {
    var attraction = new Attraction(req.body);
    attraction.save(function(err) {
        if (err) { return next(err); }
        res.status(201).json({ status: 201, data: attraction, message: 'Successfully saved the attraction' });
    });
}

// DELETE method
exports.removeAttraction = async function (req, res, next) {
    var id = req.params.id;
    Attraction.findOneAndDelete({_id: id}, function(err, attraction) {
        if (err) { return next(err); }
        if (attraction === null) {
            return res.status(404).json({ status: 404, message: 'Attraction not found' });
        }
        res.status(200).json({status: 200, data: {"_id": attraction._id}, message: 'Successfully removed the attraction.' });
    });
}

// PUT method
exports.updateAttraction = async function (req, res, next) {
    let id = req.params.id;
    let params = { 
        name: req.body.name,
        description: req.body.description, 
        price: req.body.price,
        status: req.body.status,
        image: req.body.image,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        queueTime: req.body.queueTime
    };
    var unsetParams = [];
    Object.keys(params).forEach(p => { if(params[p] === undefined) unsetParams.push(p)});

    Attraction.findOneAndUpdate({ _id: id }, [{$set: params}, {$unset: unsetParams}], {new: true, omitUndefined: true}, function(err, attraction) {
        if (err) { return next(err); }
        if (attraction === null) {
            return res.status(404).json({ status: 404, message: 'Attraction was not found' });
        }
        res.status(200).json({ status: 200, data: attraction, message: 'Attraction was updated' });
    });
}
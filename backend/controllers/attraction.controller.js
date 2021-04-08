var Attraction = require('../models/attraction.model')

exports.getAttractions = async function (req, res, next) {
    var query = req.params.query ? req.params.query : {};
    //var page = req.params.page ? req.params.page : 1;
    //var limit = req.params.limit ? req.params.limit : 10;
    Attraction.find(query, function(err, attractions) {
        if (err) { return next(err); }
        res.status(200).json({ status: 200, data: attractions, message: 'Successfully retrieved the attractions.' });
    });
}

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

exports.removeAttraction = async function (req, res, next) {
    var id = req.params.id;
    Attraction.findOneAndDelete({_id: id}, function(err, attraction) {
        if (err) { return next(err); }
        if (attraction === null) {
            return res.status(404).json({ status: 404, message: 'Attraction was not found' });
        }
        res.status(200).json({status: 200, data: attraction._id, message: 'Successfully removed the attraction.' });
    });
}

exports.saveAttraction = async function (req, res, next) {
    var attraction = new Attraction(req.body);
    attraction.save(function(err) {
        if (err) { return next(err); }
        res.status(201).json({ status: 201, data: attraction, message: 'Successfully saved the attraction' });
    });
}

exports.removeAttraction = async function (req, res, next) {
    var id = req.params.id;
    Attraction.findOneAndDelete({_id: id}, function(err, attraction) {
        if (err) { return next(err); }
        if (attraction === null) {
            return res.status(404).json({ status: 404, message: 'Attraction was not found' });
        }
        res.status(200).json({status: 200, data: attraction._id, message: 'Successfully removed the attraction.' });
    });
}

exports.updateAttraction = async function (req, res, next) {
    let id = req.params.id;

    let params = { 
        name: req.body.name,
        description: req.body.description, 
        price: req.body.price,
        status: req.body.status,
        image: req.body.image
    };

    console.log(params)

    Attraction.findOneAndUpdate({ _id: id }, params, {new: true, omitUndefined: true}, function(err, attraction) {
        if (err) { return next(err); }
        if (attraction === null) {
            return res.status(404).json({ status: 404, message: 'Attraction was not found' });
        }
        res.status(200).json({ status: 200, data: attraction, message: 'Attraction was updated' });
    });
}
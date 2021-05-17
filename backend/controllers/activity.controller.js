const {Activity, activityTypes} = require('../models/activity.model')

// GET method

exports.getTypes = async function (req, res) {
    res.status(200).json({ status: 200, data: activityTypes, message: 'Successfully retrieved activity types.' });
}

exports.getAll = async function (req, res, next) {
    var type = req.query.type ? req.query.type: activityTypes;
    var sortBy = req.query.sortBy ? req.query.sortBy: ['name', 'asc'];
    var pageskip = (req.query.page ? req.query.page : 1) - 1;
    var limit = req.query.limit ? req.query.limit : 4;
    if (isNaN(limit) || isNaN(pageskip)) {
        return next({ status: 500, message: 'Bad request'})
    }

    pageskip = parseInt(pageskip, 10)
    limit = parseInt(limit, 10)
    if (typeof type === 'string') {
        type = type.split(',')
    }

    if (typeof sortBy === 'string') {
        sortBy = sortBy.split(',')
    }

    console.log(sortBy)

    Activity.find({'type': { '$in': type}}, function(err, activities) {
        if (err) { return next(err); }
        res.status(200).json({ status: 200, data: activities, message: 'Successfully retrieved the activities.' });
    })
    .sort([sortBy])
    .skip(pageskip * limit)
    .limit(limit);
}

// GET method
exports.getOne = async function (req, res, next) {
    var id = req.params.id;
    Activity.findById(id, function(err, activity) {
        if (err) { return next(err); }
        if (activity === null) {
            return res.status(404).json({ status: 404, message: 'Activity not found'});
        }
        res.status(200).json({ status: 200, data: activity, message: 'Successfully retrieved the activity.' });
    });
}

// POST method
exports.save = async function (req, res, next) {
    var activity = new Activity(req.body);
    activity.save(function(err) {
        if (err) { return next(err); }
        res.status(201).json({ status: 201, data: activity, message: 'Successfully saved the activity' });
    });
}

// DELETE method
exports.remove = async function (req, res, next) {
    var id = req.params.id;
    Activity.findOneAndDelete({_id: id}, function(err, activity) {
        if (err) { return next(err); }
        if (activity === null) {
            return res.status(404).json({ status: 404, message: 'Activity not found' });
        }
        res.status(200).json({status: 200, data: {"_id": activity._id}, message: 'Successfully removed the activity.' });
    });
}


exports.updateSeats = async function (req, res) {
    let seats = req.body.reservableSeats;
    console.log(seats, req.params.id)
    Activity.findByIdAndUpdate(
      req.params.id, 
      { reservableSeats: seats },
      function (err, activity) {
        if (err) { return next(err); }
        if (activity === null) {
            return res.status(404).json({ status: 404, message: 'Activity not found'});
        }
        res.status(200).json({ status: 200, data: activity.reservableSeats, message: 'Activity was added' });
       }
    )
  }
  

// PUT method
exports.update = async function (req, res, next) {
    let id = req.params.id;
    let params = { 
        name: req.body.name,
        description: req.body.description, 
        price: req.body.price,
        status: req.body.status,
        type: req.body.type,
        image: req.body.image,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        queueTime: req.body.queueTime,
        reservableSeats: req.body.reservableSeats
    };
    var unsetParams = [];
    Object.keys(params).forEach(p => { if(params[p] === undefined) unsetParams.push(p)});

    Activity.findOneAndUpdate({ _id: id }, [{$set: params}, {$unset: unsetParams}], {new: true, omitUndefined: true}, function(err, activity) {
        if (err) { return next(err); }
        if (activity === null) {
            return res.status(404).json({ status: 404, message: 'Activity was not found' });
        }
        res.status(200).json({ status: 200, data: activity, message: 'Activity was updated' });
    });
}
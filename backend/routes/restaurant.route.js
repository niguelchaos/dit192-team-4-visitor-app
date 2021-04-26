var express = require('express');
var router = express.Router();
var RestaurantController = require('../controllers/Restaurant.controller');

router.post('/restaurants', RestaurantController.saveRestaurant);
router.get('/restaurants', RestaurantController.getRestaurants);
router.get('/restaurants/:id', RestaurantController.getRestaurant);
//router.patch('/restaurants/:id', RestaurantController.patchRestaurant);
router.put('/restaurants/:id', RestaurantController.updateRestaurant);
router.delete('/restaurants/:id', RestaurantController.removeRestaurant);

module.exports = router;
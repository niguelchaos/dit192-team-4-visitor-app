const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const authService = require('../service/auth.service');

router.post('/auth/login', authController.login);
router.post('/auth/register', authController.register);
router.get('/auth/me', authService.verifyToken, authController.me);
router.delete('/auth/deregister/:id', authService.verifyToken, authService.authorizeSame(), authController.deregister);
router.put('/auth/reservation', authController.addReservation);
router.get('/auth/reservations', authController.getReservations);
router.put('/auth/ticket', authController.addTicket);
router.get('/auth/tickets', authController.getTickets);

module.exports = router;
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orders');

router.get('/:id_usuario/:id', orderController.getOrder);

router.get('/:id_usuario', orderController.getOrders);

router.post('/:id_usuario', orderController.createOrder);

router.put('/:id_usuario/:id', orderController.updateOrder);

router.delete('/:id_usuario/:id', orderController.deleteOrder);

module.exports = router;
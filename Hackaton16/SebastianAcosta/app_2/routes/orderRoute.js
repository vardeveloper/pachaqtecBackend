const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.get("/:id", orderController.getOrderById)

router.get("/", orderController.getAllOrders)

router.post("/", orderController.createOrder)

router.patch("/:id", orderController.updateOrder)

module.exports = router;
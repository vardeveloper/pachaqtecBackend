const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/:id", productController.getItemById)

router.get("/", productController.getAllItems)

router.post("/", productController.createItem)

router.patch("/:id", productController.updateItem)

router.delete("/", productController.deleteItem)

module.exports = router;
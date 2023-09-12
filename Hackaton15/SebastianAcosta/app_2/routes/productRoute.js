const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/:id", productController.getItemById)

router.get("/buscar/:q", productController.getItemByName)

router.get("/", productController.getAllItems)

router.post("/", productController.createItem)

router.patch("/:id", productController.updateItem)

router.delete("/:id", productController.deleteItem)

module.exports = router;
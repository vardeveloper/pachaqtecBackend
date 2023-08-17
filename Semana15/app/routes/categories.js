const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.get("/:id", categoryController.getCategoryById)

router.get("/", categoryController.getAllCategories)

router.post("/", categoryController.createCategory)

router.patch("/:id", categoryController.updateCategory)

router.delete("/:id", categoryController.deleteCategory)

module.exports = router;

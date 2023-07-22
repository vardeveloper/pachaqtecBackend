const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categories');

router.get('/:id', categoryController.getCategory);

router.get('/', categoryController.getCategories);

router.post('/', categoryController.createCategory);

router.put('/:id', categoryController.updateCategory);

router.delete('/:id', categoryController.deleteCategroy);

module.exports = router;
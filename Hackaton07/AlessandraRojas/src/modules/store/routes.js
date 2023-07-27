const express = require('express');
const router = express.Router();
const storeService = require('./services');

// POST add a new product to the store
router.post('/products', (req, res) => {
  const product = req.body;
  storeService.addProductToStore(product);
  return res.json({ message: 'Product added to the store successfully' });
});

// GET show all products in the store
router.get('/products', (req, res) => {
  const products = storeService.getAllProducts();
  return res.json(products);
});

// POST create a new category
router.post('/categories', (req, res) => {
  const categoryName = req.body.name;
  storeService.createCategory(categoryName);
  return res.json({ message: 'Category created successfully' });
});

// POST add a product to a specific category
router.post('/categories/:categoryName/products', (req, res) => {
  const categoryName = req.params.categoryName;
  const product = req.body;
  storeService.addProductToCategory(categoryName, product);
  return res.json({ message: 'Product added to the category successfully' });
});

// GET get all products in a specific category
router.get('/categories/:categoryName/products', (req, res) => {
  const categoryName = req.params.categoryName;
  const products = storeService.getProductsByCategory(categoryName);
  return res.json(products);
});

module.exports = router;

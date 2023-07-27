const express = require('express');
const router = express.Router();
const productService = require('./services');

// GET all products
router.get('/', (req, res) => {
  const products = productService.getAllProducts();
  return res.json(products);
});

// GET product by ID
router.get('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = productService.getProductById(productId);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  return res.json(product);
});

// POST create new product
router.post('/', (req, res) => {
  const newProduct = req.body;
  const product = productService.createProduct(newProduct);
  return res.status(201).json(product);
});

// PUT update product by ID
router.put('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const dataToUpdate = req.body;
  const updatedProduct = productService.updateProduct(productId, dataToUpdate);

  if (!updatedProduct) {
    return res.status(404).json({ error: 'Product not found' });
  }

  return res.json(updatedProduct);
});

// DELETE product by ID
router.delete('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  productService.deleteProduct(productId);
  return res.json({ message: 'Product deleted successfully' });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const userService = require('./services');

router.get('/', (req, res) => {
  const users = userService.getAllUsers();
  return res.json(users);
});

router.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = userService.getUserById(userId);

  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  return res.json(user);
});

router.post('/', (req, res) => {
  const newUser = req.body;
  const user = userService.createUser(newUser);
  return res.status(201).json(user);
});

router.put('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const dataToUpdate = req.body;
  const updatedUser = userService.updateUser(userId, dataToUpdate);

  if (!updatedUser) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  return res.json(updatedUser);
});

router.delete('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  userService.deleteUser(userId);
  return res.json({ message: 'Usuario eliminado correctamente' });
});

router.post('/:id/cart', (req, res) => {
  const userId = parseInt(req.params.id);
  const { product, quantity } = req.body;

  userService.addToCart(userId, product, quantity);
  return res.json({ message: 'Product added to cart successfully' });
});

router.delete('/:id/cart', (req, res) => {
  const userId = parseInt(req.params.id);
  const { product } = req.body;

  userService.removeFromCart(userId, product);
  return res.json({ message: 'Product removed from cart successfully' });
});

module.exports = router;
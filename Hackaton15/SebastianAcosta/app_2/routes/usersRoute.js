const express = require('express');
const router = express.Router();

const Usuario = require('../models/usuarioModel');
const UserController = require('../controllers/userController.js');

router.post('/', UserController.insertUser);

router.patch('//:id', UserController.updateUsuario);

router.get('/', UserController.getAllUsers);

router.delete('/:id', UserController.eliminarUsuario);


module.exports = router;
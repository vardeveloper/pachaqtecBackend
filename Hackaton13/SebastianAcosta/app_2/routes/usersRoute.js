const express = require('express');
const router = express.Router();

const Usuario = require('../models/usuarioModel');
const UserController = require('../controllers/userController.js');

router.post('/api/usuarios', UserController.insertUser);

router.patch('/api/usuarios/:id', UserController.updateUsuario);

router.get('/api/usuarios', UserController.getAllUsers);

router.delete('/api/usuarios/:id', UserController.eliminarUsuario);


module.exports = router;
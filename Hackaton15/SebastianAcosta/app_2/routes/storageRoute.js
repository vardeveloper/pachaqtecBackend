const express = require('express');
const router = express.Router();
const uploadMiddleware = require("../helpers/hadleStorage.js");

const storageController = require('../controllers/storageController.js');

router.get('/', storageController.findAllStorage);

router.post('/',uploadMiddleware.single("archivo"), storageController.agregarArchivo);

router.delete('/:id', storageController.elimnarArchivo);

module.exports = router;

const express = require('express');
const router = express.Router();
const uploadMiddleware = require("../helpers/hadleStorage.js");

const storageController = require('../controllers/storageController.js');

router.get('/api/storage', storageController.findAllStorage);

router.post('/api/storage',uploadMiddleware.single("archivo"), storageController.agregarArchivo);

router.delete('/api/storage/:id', storageController.elimnarArchivo);

module.exports = router;

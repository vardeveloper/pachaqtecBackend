const express = require("express");
const router = express.Router();

const storageController = require("../controllers/storageController");
const uploadMiddleware = require("../helpers/handleStorage");

//TODO: GET http://localhost:3001/api/storage/xxxxx
router.get("/:id", storageController.getItem)

//TODO: GET http://localhost:3001/api/storage/
router.get("/", storageController.getItems)

//TODO: POST http://localhost:3001/api/storage/
router.post("/", uploadMiddleware.single("archivo"), storageController.createItem)

//TODO: DELETE http://localhost:3001/api/storage/xxxxxx
router.delete("/:id", storageController.deleteItem)

module.exports = router;
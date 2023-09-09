const express = require("express");
const router = express.Router();
const carritoController = require("../controllers/carritoController.js");

router.post("/", carritoController.crearCarrito);

router.patch("/:id", carritoController.agregarProducto);

router.get("/", carritoController.encontrarCarrito);

router.delete("/:id", carritoController.eliminarProducto);

router.delete("/carrito/:id", carritoController.eliminarCarrito);

module.exports = router;
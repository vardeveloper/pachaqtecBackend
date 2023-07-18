const { Router } = require("express");
const carritoService = require("../services/carrito.service");

const routes = Router();

routes.get("/", carritoService.getListProduct);
routes.post("/create", carritoService.agregarCarrito)

module.exports = routes;
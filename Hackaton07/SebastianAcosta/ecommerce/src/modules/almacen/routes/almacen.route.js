const { Router } = require("express");
const almacenService = require("../services/almacen.service");

const routes = Router();

routes.get("/", almacenService.getAll);
routes.get("/buscar", almacenService.buscarProducto2);

module.exports = routes;
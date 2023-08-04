<<<<<<< HEAD
const { Router } = require("express");
const almacenService = require("../services/almacen.service");

const routes = Router();

routes.get("/", almacenService.getAll);
routes.get("/buscar", almacenService.buscarProducto2);

=======
const { Router } = require("express");
const almacenService = require("../services/almacen.service");

const routes = Router();

routes.get("/", almacenService.getAll);
routes.get("/buscar", almacenService.buscarProducto2);

>>>>>>> bf309621bc019e0542972cad940a959e81b62819
module.exports = routes;
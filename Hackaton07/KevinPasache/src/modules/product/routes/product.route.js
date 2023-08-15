const { Router } = require("express");
const ProductService = require("../services/product.service");

const routes = Router();

routes.get("/", ProductService.getListProduct);

routes.post("/create",ProductService.crear);

module.exports = routes;
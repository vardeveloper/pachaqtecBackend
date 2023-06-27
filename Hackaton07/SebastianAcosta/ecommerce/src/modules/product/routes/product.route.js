const { Router } = require("express");
const productService = require("../services/product.service");

const routes = Router();

routes.get("/", productService.getListProduct);

routes.post("/create", productService.crear);

module.exports = routes;
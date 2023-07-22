const { response } = require("express");
const Product = require("../entity/product.entity");
const almacenService = require("../../almacen/services/almacen.service");

class PorductService {
  constructor() {}

  getListProduct(req, res) {
    res.json(almacenService.getLista);
  }

  crear(req, res) {
    const {id, name, price, description, stock } = req.body;
    const newProduct = new Product(id, name, price, description, stock);

    //console.log(newProduct);
    almacenService.agregarAlmacen(newProduct);

    res.json(newProduct);
  }
}
const productService = new PorductService();

module.exports = productService;
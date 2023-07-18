const { response } = require("express");
const Carrito = require("../entity/carrito.entity");
const Product = require("../../product/entity/product.entity");
const almacen = require("../../almacen/entity/almacen.entity");

class CarritoService {
  constructor() {}

  getListProduct(req, res = response) {
    res.json(Carrito.getLista);
  }

  agregarCarrito(req, res) {
    const {id} = req.body;
    console.log(id);
    const newProduct = almacen.buscarProductos(id);
    console.log(newProduct);
    Carrito.agregarProductos(newProduct);

    res.json(newProduct);
  }
}
const carritoService = new CarritoService();

module.exports = carritoService;
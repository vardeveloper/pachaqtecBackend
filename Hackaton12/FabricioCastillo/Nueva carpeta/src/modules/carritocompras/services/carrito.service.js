
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
    const {nombre, id} = req.body;
    console.log(nombre);
    const newProduct = almacen.buscarProductosId(id);
    Carrito.agregarProductos(newProduct2.getInfo);
    res.json(newProduct2.getInfo);
  }
}
const carritoService = new CarritoService();

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
    const {nombre, id} = req.body;
    console.log(nombre);
    const newProduct = almacen.buscarProductosId(id);
    Carrito.agregarProductos(newProduct2.getInfo);
    res.json(newProduct2.getInfo);
  }
}
const carritoService = new CarritoService();

module.exports = carritoService;
const { response } = require("express");
// const Almacen = require("../entity/almacen.entity");
const almacen = require("../entity/almacen.entity");

class AlmacenService {
  constructor() {}

  getAll(req, res = response) {
    res.json(almacen.getLista);
  }

  get getLista() {
    return almacen.getLista;
  }

  agregarAlmacen(product) {
    almacen.agregarProductos(product);
  }

  buscarProducto(name) {
    return almacen.buscarProductos(name);
  }

  buscarProducto2(req, res = response) {
    const {id} = req.body;
    console.log(id);
    res.json(almacen.buscarProductos(id));
  }
}

const almacenService = new AlmacenService();

module.exports = almacenService;
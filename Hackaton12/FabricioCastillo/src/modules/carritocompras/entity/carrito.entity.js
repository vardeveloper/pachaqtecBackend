class CarritoCompras {
    constructor() {
      this.productos = [];
    }
    agregarProductos(producto) {
      this.productos.push(producto);
    }
    buscarProductos(nombre) {
      return this.productos.filter((producto) => (producto.nombre = nombre));
    }
    get getLista() {
      return this.productos;
    }
    get precio() {
        let total = 0;
        this.productos.forEach((producto) => {
          total += producto.precio;
        });
        return total;
    }
  }
  
  const Carrito = new CarritoCompras();
  
class CarritoCompras {
    constructor() {
      this.productos = [];
    }
    agregarProductos(producto) {
      this.productos.push(producto);
    }
    buscarProductos(nombre) {
      return this.productos.filter((producto) => (producto.nombre = nombre));
    }
    get getLista() {
      return this.productos;
    }
    get precio() {
        let total = 0;
        this.productos.forEach((producto) => {
          total += producto.precio;
        });
        return total;
    }
  }
  
  const Carrito = new CarritoCompras();
  
  module.exports = Carrito;
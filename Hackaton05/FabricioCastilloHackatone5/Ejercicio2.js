class CarritoDeCompras {
    constructor() {
      this.productos = [];
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
    }
  
    eliminarProducto(producto) {
      const indice = this.productos.indexOf(producto);
      if (indice !== -1) {
        this.productos.splice(indice, 1);
      }
    }
  
    calcularTotalCompra() {
      let total = 0;
      for (let i = 0; i < this.productos.length; i++) {
        total += this.productos[i].precio;
      }
      return total;
    }
  }
  
  // Ejemplo
  class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  let carrito = new CarritoDeCompras();
  
  let producto1 = new Producto("PapelesA4", 25);
  let producto2 = new Producto("Calculadora", 50);
  let producto3 = new Producto("Mouse", 80);
  
  carrito.agregarProducto(producto1);
  carrito.agregarProducto(producto2);
  carrito.agregarProducto(producto3);
  
  console.log(carrito.productos); 
  console.log(carrito.calcularTotalCompra());
//2. Implementar una clase "CarritoDeCompras" que tenga un arreglo para almacenar los productos agregados al carrito.
// Incluye métodos para agregar un producto, eliminar un producto y calcular el total de la compra

class CarritoDeCompras {
    constructor() {
      this.productos = [];
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
    }
  
    eliminarProducto(producto) {
      const index = this.productos.indexOf(producto);
      if (index !== -1) {
        this.productos.splice(index, 1);
      }
    }
  
    calcularTotalCompra() {
      let total = 0;
      for (let producto of this.productos) {
        total += producto.obtenerPrecio();
      }
      return total;
    }
  }  
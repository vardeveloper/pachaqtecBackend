class CarritoDeCompras {
    constructor() {
      this.productos = [];
    }
  






    // metodo para agregar un producto al carrito
    agregarProducto(producto) {
      this.productos.push(producto);
    }
  


    // metodo para eliminar un producto del carrito
    eliminarProducto(producto) {
      const indice = this.productos.indexOf(producto);
      if (indice !== -1) {
        this.productos.splice(indice, 1);
      }
    }
    // metodo para calcular el total de la compra
    calcularTotal() {
      let total = 0;
      this.productos.forEach((producto) => {
        total += producto.obtenerPrecio();
      });
      return total;
    }
  }
  
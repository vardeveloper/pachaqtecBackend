class Factura {
    constructor(nombreCliente, direccionEnvio, productos) {
      this.nombreCliente = nombreCliente;
      this.direccionEnvio = direccionEnvio;
      this.productos = productos;
      this.totalCompra = this.calcularTotalCompra();
    }
    calcularTotalCompra() {
      let total = 0;
      for (const producto of this.productos) {
        total += producto.precio;
      }
      return total;
    }
    imprimirFactura() {
      console.log("Factura: 00001");
      console.log("Nombre del cliente:", this.nombreCliente);
      console.log("Dirección de envío:", this.direccionEnvio);
      console.log("Productos comprados:");
      for (const producto of this.productos) {
        console.log("- ", producto.nombre, ": S./", producto.precio);
      }
      console.log("Total de la compra: S./", this.totalCompra);
    }
}

class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  const producto1 = new Producto("Camiseta", 25);
  const producto2 = new Producto("Pantalón", 40);
  const producto3 = new Producto("Jeans", 10);
  

  const factura = new Factura("Draven Executor", "Calle Principal Noxus", [producto1, producto2, producto3]);

  factura.imprimirFactura();

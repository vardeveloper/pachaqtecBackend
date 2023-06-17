class Factura {
    constructor(cliente, direccionEnvio) {
      this.cliente = cliente;
      this.direccionEnvio = direccionEnvio;
      this.productos = [];
      this.total = 0;
    }
  
    agregarProducto(producto, cantidad) {
      this.productos.push({ producto, cantidad });
      this.actualizarTotal();
    }
  
    actualizarTotal() {
      this.total = 0;
      this.productos.forEach((item) => {
        this.total += item.producto.precio * item.cantidad;
      });
    }
  
    generarFactura() {
      console.log("--- Factura ---");
      console.log("Cliente: " + this.cliente);
      console.log("Dirección de envío: " + this.direccionEnvio);
      console.log("Productos: ");
      this.productos.forEach((item) => {
        console.log(
          " - " +
            item.producto.nombre +
            " x " +
            item.cantidad +
            " - Precio unitario: " +
            item.producto.precio
        );
      });
      console.log("Total de la compra: " + this.total);
    }
  }
  
  // Ejemplo
  class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  let factura = new Factura("Fabricio Castillo", "Calle Principal 256");
  
  let producto1 = new Producto("Zapatillas Converse", 85);
  let producto2 = new Producto("Kit de fitness", 150);
  
  factura.agregarProducto(producto1, 2);
  factura.agregarProducto(producto2, 1);
  
  factura.generarFactura();
  

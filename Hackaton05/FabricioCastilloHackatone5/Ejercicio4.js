class Pedido {
    constructor(fecha, productos, direccionEnvio, metodoPago) {
      this.fecha = fecha;
      this.productos = productos;
      this.direccionEnvio = direccionEnvio;
      this.metodoPago = metodoPago;
      this.confirmado = false;
    }
  
    calcularTotalPedido() {
      let total = 0;
      for (let i = 0; i < this.productos.length; i++) {
        total += this.productos[i].precio;
      }
      return total;
    }
  
    confirmarPedido() {
      this.confirmado = true;
      console.log("Pedido confirmado.");
    }
  
    mostrarDetallesPedido() {
      console.log("Fecha: " + this.fecha);
      console.log("Productos:");
      this.productos.forEach((producto) => {
        console.log("- " + producto.nombre + " - Precio: " + producto.precio);
      });
      console.log("Dirección de envío: " + this.direccionEnvio);
      console.log("Método de pago: " + this.metodoPago);
      console.log("Total del pedido: " + this.calcularTotalPedido());
    }
  }
  
  // Ejemplo
  class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  let producto1 = new Producto("1/4 de Pollo", 25);
  let producto2 = new Producto("Porcion de Papas", 10);
  let producto3 = new Producto("Gaseosa", 12);
  
  let productosSeleccionados = [producto1, producto2, producto3];
  
  let pedido = new Pedido(
    "2023-06-10",
    productosSeleccionados,
    "Calle Principal 526",
    "Tarjeta de crédito"
  );
  
  pedido.confirmarPedido();
  pedido.mostrarDetallesPedido();
  
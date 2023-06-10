class Pedido {
    constructor(fecha, productos, direccionEnvio, metodoPago) {
      this.fecha = fecha;
      this.productos = productos;
      this.direccionEnvio = direccionEnvio;
      this.metodoPago = metodoPago;
      this.confirmado = false;
    }
  



    // metodo para calcular el total del pedido
    calcularTotal() {
      let total = 0;
      this.productos.forEach((producto) => {
        total += producto.obtenerPrecio();
      });
      return total;
    }
  
    // metodo para confirmar el pedido
    confirmarPedido() {
      this.confirmado = true;
      console.log("Pedido confirmado.");
    }
  
  
  
  
  
    // metodo para mostrar los detalles del pedido
    mostrarDetalles() {
      console.log("Fecha: ", this.fecha);
      console.log("Productos:");
      this.productos.forEach((producto) => {
        console.log("- ", producto.nombre);
      });
      console.log("Dirección de envío:", this.direccionEnvio);
      console.log("Método de pago:", this.metodoPago);
      console.log("Total del pedido:", this.calcularTotal());
    }
  }
  
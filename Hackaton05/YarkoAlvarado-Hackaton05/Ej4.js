// 4. Implementar una clase "Pedido" que tenga propiedades como fecha, productos seleccionados, dirección de envío y método de pago. Incluye métodos para calcular el total del pedido, confirmar el pedido y mostrar los detalles del pedido.

class Pedido {
    constructor(fecha, productosSeleccionados, direccionEnvio, metodoPago) {
      this.fecha = fecha;
      this.productosSeleccionados = productosSeleccionados;
      this.direccionEnvio = direccionEnvio;
      this.metodoPago = metodoPago;
    }
  
    calcularTotalPedido() {
      let total = 0;
      for (let producto of this.productosSeleccionados) {
        total += producto.obtenerPrecio();
      }
      return total;
    }
  
    confirmarPedido() {
      console.log('Pedido confirmado');
    }
  
    mostrarDetallesPedido() {
      console.log(`Fecha: ${this.fecha}`);
      console.log('Productos seleccionados:');
      for (let producto of this.productosSeleccionados) {
        console.log(`- ${producto.obtenerNombre()}`);
      }
      console.log(`Dirección de envío: ${this.direccionEnvio}`);
      console.log(`Método de pago: ${this.metodoPago}`);
    }
  }  
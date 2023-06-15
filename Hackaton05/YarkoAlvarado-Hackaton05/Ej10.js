// 10. Implementar una clase "Envío" que represente los detalles de envío de un pedido. La clase debe tener propiedades como dirección de envío, fecha de entrega estimada y estado de envío. Incluye métodos para actualizar el estado de envío y calcular la fecha de entrega estimada.

class Envio {
    constructor(direccionEnvio, fechaEntregaEstimada, estadoEnvio) {
      this.direccionEnvio = direccionEnvio;
      this.fechaEntregaEstimada = fechaEntregaEstimada;
      this.estadoEnvio = estadoEnvio;
    }
  
    actualizarEstadoEnvio(estado) {
      this.estadoEnvio = estado;
    }
  
    calcularFechaEntregaEstimada() {
      // Lógica para calcular la fecha de entrega estimada
      return this.fechaEntregaEstimada;
    }
  }  
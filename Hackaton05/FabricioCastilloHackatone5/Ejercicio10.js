class Envio {
    constructor(direccionEnvio) {
      this.direccionEnvio = direccionEnvio;
      this.fechaCompra = new Date();
      this.estadoEnvio = "Pendiente";
    }
  
    confirmarEnvio() {
      this.estadoEnvio = "Confirmado";
    }
  
    marcarListoParaEnviar() {
      this.estadoEnvio = "Listo para enviar";
    }
  
    calcularFechaEntregaEstimada(diasEstimados) {
      const fechaActual = new Date();
      fechaActual.setDate(fechaActual.getDate() + diasEstimados);
      this.fechaEntregaEstimada = fechaActual;
    }
  }
  
  // Ejemplo
  let envio = new Envio("Calle Principal 256");
  
  console.log("Dirección de envio: " + envio.direccionEnvio);
  
  console.log("Fecha de compra: " + envio.fechaCompra);
  
  envio.confirmarEnvio();
  console.log("Estado de envío: " + envio.estadoEnvio);
  
  envio.marcarListoParaEnviar();
  console.log("Estado de envío: " + envio.estadoEnvio);
  
  envio.calcularFechaEntregaEstimada(5);
  console.log("Fecha de entrega estimada: " + envio.fechaEntregaEstimada);
  
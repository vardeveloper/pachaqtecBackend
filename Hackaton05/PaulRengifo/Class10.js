class Envio {
    constructor(direccionEnvio) {
      this.direccionEnvio = direccionEnvio;
      this.fechaEntregaEstimada = null;
      this.estadoEnvio = "Pendiente";
    }
  
    actualizarEstadoEnvio(estado) {
      this.estadoEnvio = estado;
    }
  
    calcularFechaEntregaEstimada(dias) {
      const fechaActual = new Date();
      const fechaEntrega = new Date(fechaActual.setDate(fechaActual.getDate() + dias));
      this.fechaEntregaEstimada = fechaEntrega;
    }
  }
  
  // Ejemplo de uso
  const envioEjemplo = new Envio("Calle Principal 123");
  
  console.log("Dirección de envío:", envioEjemplo.direccionEnvio);
  console.log("Fecha de entrega estimada:", envioEjemplo.fechaEntregaEstimada);
  console.log("Estado de envío:", envioEjemplo.estadoEnvio);
  
  envioEjemplo.actualizarEstadoEnvio("En tránsito");
  console.log("Estado de envío actualizado:", envioEjemplo.estadoEnvio);
  
  envioEjemplo.calcularFechaEntregaEstimada(5);
  console.log("Fecha de entrega estimada calculada:", envioEjemplo.fechaEntregaEstimada);
  
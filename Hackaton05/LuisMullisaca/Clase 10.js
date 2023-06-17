class Envio {
    constructor(direccionEnvio) {
      this.direccionEnvio = direccionEnvio;
      this.fechaEntregaEstimada = this.calcularFechaEntregaEstimada();
      this.estadoEnvio = "Pendiente";
    }
  

    // metodo para actualizar el estado de envio
    
    actualizarEstadoEnvio(estado) {
      this.estadoEnvio = estado;
      console.log(`El estado de envío ha sido actualizado a "${estado}".`);
    }
  






    

    // metodo para calcular la fecha de entrega estimada
    
    calcularFechaEntregaEstimada() {
      const fechaActual = new Date();
      const diasEntrega = 5; // asumiremos 5 días de entrega estimada
      const fechaEntregaEstimada = new Date(fechaActual.getTime() + diasEntrega * 24 * 60 * 60 * 1000);
      return fechaEntregaEstimada;
    }
  }
  
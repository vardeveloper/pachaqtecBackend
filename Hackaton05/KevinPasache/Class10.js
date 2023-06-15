class Envío {
    constructor(dirección, fechaEstimada) {
      this.dirección = dirección;
      this.fechaEstimada = fechaEstimada;
      this.estadoEnvío = "En proceso";
    }
    actualizarEstadoEnvío(nuevoEstado) {
      this.estadoEnvío = nuevoEstado;
    }
  
    calcularFechaEntregaEstimada() {
      return this.fechaEstimada;
  }
}

const envío1 = new Envío("Calle Principal Noxus", "2023-06-15");

envío1.actualizarEstadoEnvío("En camino...");

const fechaEntregaEstimada = envío1.calcularFechaEntregaEstimada();

console.log(envío1);
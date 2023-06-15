class Comentario {
    constructor(nombreCliente, fecha, contenido) {
      this.nombreCliente = nombreCliente;
      this.fecha = fecha;
      this.contenido = contenido;
    }
  

    // metodos para obtener y establecer el nombre del cliente
    getNombreCliente() {
      return this.nombreCliente;
    }
  
    setNombreCliente(nombreCliente) {
      this.nombreCliente = nombreCliente;
    }
  

    // metodos para obtener y establecer la fecha del comentario
    getFecha() {
      return this.fecha;
    }
  


    setFecha(fecha) {
      this.fecha = fecha;
    }
  
    // metodos para obtener y establecer el contenido del comentario
    getContenido() {
      return this.contenido;
    }

    



    setContenido(contenido) {
      this.contenido = contenido;
    }
  }
  

class Comentario {
    constructor(nombreCliente, fecha, contenido) {
      this.nombreCliente = nombreCliente;
      this.fecha = fecha;
      this.contenido = contenido;
    }
  
    // Métodos para obtener y establecer las propiedades
  
    getNombreCliente() {
      return this.nombreCliente;
    }
  
    setNombreCliente(nombreCliente) {
      this.nombreCliente = nombreCliente;
    }
  
    getFecha() {
      return this.fecha;
    }
  
    setFecha(fecha) {
      this.fecha = fecha;
    }
  
    getContenido() {
      return this.contenido;
    }
  
    setContenido(contenido) {
      this.contenido = contenido;
    }
  }
  
  // Ejemplo de uso
  const comentarioEjemplo = new Comentario("Juan Pérez", new Date(), "¡Excelente producto!");
  
  console.log("Nombre del cliente:", comentarioEjemplo.getNombreCliente());
  console.log("Fecha del comentario:", comentarioEjemplo.getFecha());
  console.log("Contenido del comentario:", comentarioEjemplo.getContenido());
  
  comentarioEjemplo.setNombreCliente("María López");
  comentarioEjemplo.setFecha(new Date());
  comentarioEjemplo.setContenido("Muy buen producto, lo recomiendo!");
  
  console.log("Nombre del cliente actualizado:", comentarioEjemplo.getNombreCliente());
  console.log("Fecha del comentario actualizada:", comentarioEjemplo.getFecha());
  console.log("Contenido del comentario actualizado:", comentarioEjemplo.getContenido());
// 5. Crear una clase "Comentario" que represente un comentario de un cliente en un producto. La clase debe tener propiedades como nombre del cliente, fecha del comentario y contenido del comentario. Incluye métodos para obtener y establecer estas propiedades.

class Comentario {
    constructor(nombreCliente, fechaComentario, contenidoComentario) {
      this.nombreCliente = nombreCliente;
      this.fechaComentario = fechaComentario;
      this.contenidoComentario = contenidoComentario;
    }
  
    obtenerNombreCliente() {
      return this.nombreCliente;
    }
  
    establecerNombreCliente(nombre) {
      this.nombreCliente = nombre;
    }
  
    obtenerFechaComentario() {
      return this.fechaComentario;
    }
  
    establecerFechaComentario(fecha) {
      this.fechaComentario = fecha;
    }
  
    obtenerContenidoComentario() {
      return this.contenidoComentario;
    }
  
    establecerContenidoComentario(contenido) {
      this.contenidoComentario = contenido;
    }
  }  
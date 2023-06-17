class Comentario {
    constructor(nombreCliente, fechaComentario, contenidoComentario) {
      this.nombreCliente = nombreCliente;
      this.fechaComentario = fechaComentario;
      this.contenidoComentario = contenidoComentario;
    }
  
    getNombreCliente() {
      return this.nombreCliente;
    }
  
    setNombreCliente(nombreCliente) {
      this.nombreCliente = nombreCliente;
    }
  
    getFechaComentario() {
      return this.fechaComentario;
    }
  
    setFechaComentario(fechaComentario) {
      this.fechaComentario = fechaComentario;
    }
  
    getContenidoComentario() {
      return this.contenidoComentario;
    }
  
    setContenidoComentario(contenidoComentario) {
      this.contenidoComentario = contenidoComentario;
    }
  }
  
  // Ejemplo 
  let comentario = new Comentario("Fabricio", "2023-06-03", "¡Excelente explicación! Me encanta.");
  
  console.log(comentario.getNombreCliente()); 
  console.log(comentario.getFechaComentario()); 
  console.log(comentario.getContenidoComentario()); 
  
  comentario.setNombreCliente("Yarko");
  comentario.setFechaComentario("2023-06-05");
  comentario.setContenidoComentario("Muy buena clase. Lo recomiendo a mis compañeros ;).");
  
  console.log(comentario.getNombreCliente()); 
  console.log(comentario.getFechaComentario()); 
  console.log(comentario.getContenidoComentario());
  
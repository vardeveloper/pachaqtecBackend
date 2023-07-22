//Crear una clase "Comentario" que represente un comentario de un cliente en un producto. 
//La clase debe tener propiedades como nombre del cliente, fecha del comentario y contenido del comentario. 
//Incluye métodos para obtener y establecer estas propiedades.

class Comment {
    constructor(customerName, commentDate, content) {
      this.customerName = customerName;
      this.commentDate = commentDate;
      this.content = content;
    }
  
    get customerName() {
      return this.customerName;
    }
  
    get commentDate() {
      return this.commentDate;
    }
  
    get content() {
      return this.content;
    }
  
    set customerName(name) {
      this.customerName = name;
    }
  
    set commentDate(date) {
      this.commentDate = date;
    }
  
    set content(content) {
      this.content = content;
    }
  }
  
  
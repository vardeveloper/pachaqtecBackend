//5. Crear una clase "Comentario" que represente un comentario de un cliente en un producto. 
//La clase debe tener propiedades como nombre del cliente, fecha del comentario y contenido del comentario. 
//Incluye métodos para obtener y establecer estas propiedades.

class Comentario{
    constructor(nombre, coment){
        this.nombre = nombre
        this.fecha;
        this.coment = coment
    }

    get mostrarComentario(){
        return this.coment
    }
    /*set ingresarComentario(valor){ //Tengo problemas con set ya que me sale un error sobre que no es una funcion
        this._coment = valor
    }*/
    ingresarComentario(valor){
        this.coment = valor
        let hoy = new Date();
        let dia = hoy.getDate();
        let mes = hoy.getMonth()+1;
        let anio = hoy.getFullYear();
        this.fecha = `${anio}-${mes}-${dia}`
    }

}
const comentario1 = new Comentario("Jorge","Me gusta codear")
console.log(comentario1)
console.log(comentario1.mostrarComentario)
comentario1.ingresarComentario("Ahora estoy ingresando un nuevo string")
console.log(comentario1)
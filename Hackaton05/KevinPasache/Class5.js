class Comentario {
    constructor(nombre,fecha,contenido) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.contenido = contenido;
    }
    get getNombre(){
        return this.nombre;
    }
    set setNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }
}

const comment = new Comentario("Nombre de cliente","10/06/2023","Contenido del comentario")
document.write((comment.getNombre) + "</br>")
comment.setNombre = "Nuevo nombre del cliente"
document.write(comment.nombre)
class Comentario{
    constructor (nombre, fecha ,contenido ){
        this.nombre = nombre;
        this.fecha = fecha;
        this.contenido = contenido;
    }

    todosAtributos(){
        return {
            nombre: this.nombre,
            fecha: this.fecha,
            contenido: this.contenido
        };
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    set setFecha(fecha){
        this.fecha = fecha;
    }

    set setContenido(contenido){
        this.contenido = contenido;
    }
}
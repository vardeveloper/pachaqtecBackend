class Producto{
    constructor (nombre,precio,descripcion,cantidad ){
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
    }

    todosAtributos(){
        return {
            nombre: this.nombre,
            precio: this.precio,
            descripcion: this.descripcion,
            cantidad: this.cantidad
        };
    }

    get getNombre(){
        return this.nombre;
    }

    get getPrecio(){
        return this.precio;
    }

    get getDescripcion(){
        return this.descripcion;
    }

    get getCantidad(){
        return this.cantidad;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    set setPrecio(precio){
        this.precio = precio;
    }

    set setDescripcion(descripcion){
        this.descripcion = descripcion;
    }

    set setCantidad(cantidad){
        this.cantidad = cantidad;
    }
};


module.exports = Producto;
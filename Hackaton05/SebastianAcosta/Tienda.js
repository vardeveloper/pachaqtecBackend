class Comentario{
    constructor (nombre, direccion  ,productos){
        this.nombre = nombre;
        this.direccion = direccion;
        this.productos = productos;
    }

    agregarProducto(Producto){
        this.products.push(Producto);
    }

    buscarProducto(nombre){
        return this.products.find(objeto =>objeto.nombre===nombre);
    }

    mostrarProductos(){
        console.log(this.productos)
    }
}
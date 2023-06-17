class Categoria{
    constructor (nombre ,productos ){
        this.nombre  = nombre;
        this.productos = productos;
    }

    agregarProducto(Producto){
        this.productos.push(Producto);
    }

    obtenerListaProd(){
        this.productos;
    }
}
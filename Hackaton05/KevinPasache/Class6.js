class Productos {
    constructor(nombre,dirección,stock) {
        this.nombre = nombre;
        this.dirección = dirección;
        this.stock = stock;
    }
}

class Almacen {
    constructor(){
        this.productos = [];
    }
    agregarProductos(producto) {
        this.productos.push(producto);
    }
    buscarProductos(nombre) {
        return this.productos.filter((producto) => producto.nombre = nombre)
    }
    productosDisponibles(stock) {
        return this.productos.filter((producto) => producto.stock >= 0)
    }
    get getLista(){
        return this.productos;
    }
}

const almacen = new Almacen()
const producto1 = new Productos("Laptop", "Casa", 10)
const producto2 = new Productos("Mouse", "Trabajo", 5)
const producto3 = new Productos("Teclado", "Tienda", 2)

almacen.agregarProductos(producto1);
console.log(almacen.getLista)

almacen.buscarProductos("Mouse")
console.log(almacen.buscarProductos)

almacen.productosDisponibles()
console.log(almacen.productosDisponibles)
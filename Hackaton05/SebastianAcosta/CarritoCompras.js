const Producto = require('./Producto.js');

class CarritoDeCompras{
    constructor(){
        this.products = [];
    }

    agregarProducto(Producto){
        this.products.push(Producto);
    }
    
    eliminarProducto(nombre){
        const indice = this.products.findIndex(objeto =>objeto.nombre===nombre);
        this.products.slice(indice,1);
    }

    calcularTotal(){
       return this.products.reduce((acumulador, objeto)=> acumulador + objeto.precio,0);
    }
}

const gaseosa = new Producto('coca',5,'cocacola',1);
const carrito1 = new CarritoDeCompras();
carrito1.agregarProducto(gaseosa);

console.log(carrito1);
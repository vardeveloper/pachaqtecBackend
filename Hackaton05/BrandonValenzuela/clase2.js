//Implementar una clase "CarritoDeCompras" que tenga un arreglo para almacenar los productos agregados al carrito.
//Incluye métodos para agregar un producto, eliminar un producto y calcular el total de la compra.

const Producto = require("./clase1");

class CarritoDeCompras {
    constructor() {
       this.separado = [];

   }

    agregarCarrito (producto){
       this.separado.push(producto);

    }
    eliminarCarrito(nombre){
      const indice = this.products.findIndex(objeto =>objeto.nombre===nombre);
      this.products.slice(indice,1);

    }
   cantidadCarrito(){
       return this.separado;

   }  

   precioTotal(){
        
        return separado.reduce((acumulador,objeto)=> acumulador + objeto.precio,0);
                     
                
        }
            
}


const separado = new CarritoDeCompras();

const libros1 = new Producto ("la bella y la bestia",15,"edicion especial con hojas a color",15);
const libros2 = new Producto ("Paco yunque",10,"standar tapa blanda a color",20);
const libros3 = new Producto ("mil años de soledad",30,"tapa dura edicion español",5);
const libros4 = new Producto ("amor y prejucicio",30,"primera edicion, reeditado",10);
const libros5 = new Producto ("mi planta de naranja lima",10,"libro standar tapa gastada sin color",5);

separado.agregarCarrito(libros1);
console.log(separado.cantidadCarrito().length);

module.export = CarritoDeCompras;

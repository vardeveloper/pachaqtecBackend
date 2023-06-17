//Implementar una clase "CarritoDeCompras" que tenga un arreglo para almacenar los productos agregados al carrito.
//Incluye métodos para agregar un producto, eliminar un producto y calcular el total de la compra.

class CarritoDeCompras {
    constructor() {
       this.separado = [];

   }

    agregarCarrito (producto){
       this.separado.push(producto);

    }
    eliminarCarrito(producto){
       this.separado.pop(producto);

    }
   cantidadCarrito(){
       return this.separado;

   }  

   precioTotal(){
        
        separado.reduce((acumulador,objeto)=> acumulador + objeto.precio);
                
        }
            
}


const separado = new CarritoDeCompras


separado.agregarCarrito(libros);
console.log(separado.cantidadCarrito());

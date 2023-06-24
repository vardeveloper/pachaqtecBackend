//Crear una clase "Producto" que tenga propiedades como nombre, precio, descripción y cantidad en stock. Incluye métodos para obtener y actualizar estas propiedades.
class Producto {
    constructor (nombre,precio,descripcion,stock){
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion
        this.stock = stock
    }

    todosAtributos(){
        return {
        precio: this.precio,
        stock: this.stock,
         };
    }
    get obtenerPrecio() {
        return this.precio;

    }
    get obtenerStock() {
        return this.stock;
    }    

    set actualizarPrecio(precio){

        return this.precio = precio;
        
    }
    set actualizarStock(stock){

        return this.stock = stock
    }

}


const libros = new Producto ("Harry Potter",25,"libro tapa dura especial",5);
console.log(libros.precio);
libros.actualizarPrecio = 50;
console.log(libros.precio);

const libros1 = new Producto ("la bella y la bestia",15,"edicion especial con hojas a color",15);
const libros2 = new Producto ("Paco yunque",10,"standar tapa blanda a color",20);
const libros3 = new Producto ("mil años de soledad",30,"tapa dura edicion español",5);
const libros4 = new Producto ("amor y prejucicio",30,"primera edicion, reeditado",10);
const libros5 = new Producto ("mi planta de naranja lima",10,"libro standar tapa gastada sin color",5);

module.export = Producto



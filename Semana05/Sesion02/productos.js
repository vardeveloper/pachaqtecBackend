// Crear una clase "Producto":
class Producto {
    constructor(id, nombre, precio, descripcion, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.stock = stock;
    }

    actualizarStock(cantidad) {
        this.stock += cantidad;
    }
}

// Ejemplo de uso:
const producto1 = new Producto(1, "Camisa", 49.99, "Camisa de manga corta", 10);
console.log(producto1);
producto1.actualizarStock(5);
console.log(producto1);

// Creamos mas objetos de tipo Producto
const producto2 = new Producto(2, "Pantalon", 99.99, "Pantalon Negro", 20);
const producto3 = new Producto(3, "Polo", 29.99, "Polo blanco", 30);
const producto4 = new Producto(4, "Zapatos", 199.99, "Zapatos de cuero", 5);

// Agreamos los objetos a un arreglo
const productos = [];
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);



//*****************************************************************************/
// Usar el método map() para modificar una propiedad de todos los objetos en el array:
// Incrementar el precio de todos los productos en un 10%
//*****************************************************************************/

const arrayModificado = productos.map(objeto => {
    return {
        ...objeto,
        precio: objeto.precio * 1.1
    };
});
console.log(arrayModificado);



//*****************************************************************************/
// Utilizar el método reduce() para calcular un valor acumulado basado en una propiedad de los objetos:
// Calcular la cantidad total sumando todas las cantidades de los objetos
//*****************************************************************************/

const cantidadTotal = productos.reduce((acumulador, objeto) => acumulador + objeto.stock, 0);
console.log(cantidadTotal);



//*****************************************************************************/
// Emplear el método find() para buscar un objeto en el array basado en una condición:
// Buscar un objeto con id igual a 2
//*****************************************************************************/

const objetoEncontrado = productos.find(objeto => objeto.id === 2);
console.log(objetoEncontrado);



//*****************************************************************************/
// Utilizar el método some() para comprobar si al menos un objeto cumple una condición:
// Comprobar si hay al menos un objeto con precio mayor a 100
//*****************************************************************************/

const hayPrecioMayor25 = productos.some(objeto => objeto.precio > 100);
console.log(hayPrecioMayor25);

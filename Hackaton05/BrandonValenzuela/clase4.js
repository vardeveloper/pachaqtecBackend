//Implementar una clase "Pedido" que tenga propiedades como fecha, productos seleccionados, dirección de envío y método de pago. 
//Incluye métodos para calcular el total del pedido, confirmar el pedido y mostrar los detalles del pedido.

const producto = require("./clase1");
const carritoDeCompras = require("./clase2");


class Pedido {
    constructor (fecha,item,direccionEnvio,metodoPago){
        this.fecha = fecha;
        this.item = item;
        this.direccionEnvio = direccionEnvio;
        this.metodoPago = metodoPago;

    }

// buscar herencia entre clases pedido y carrito compra




}
//8. Implementar una clase "Factura" que represente la información 
//de facturación de una compra. La clase debe tener propiedades como 
//nombre del cliente, dirección de envío, productos comprados y total 
//de la compra. Incluye métodos para generar la factura en formato PDF 
//o enviarla por correo electrónico.
const Producto = require("./Eje1")
const Pedido = require("./Eje4")
const CarritoDeCompras = require("./Eje2")
const Tienda = require("./Eje6")

class Factura{
    constructor(tienda, usuario, carrito, direccionUsuario, fecha){
        const {nombre, direccion} = tienda;
        this.usuario = usuario;
        this.direccionFiscal = direccion;
        this.nombre = nombre;
        const {productos, total} = carrito;
        this.fecha = new Date(fecha)
        this.productos = productos;
        this.total = total;
        this.direccionUsuario = direccionUsuario
    }
    get AformatoPDF(){
        return `ToPDF${this.nombre}.pdf`
    }
    toEmail(valor){
        return "Enviado al correo"+" "+valor
    }
    emitirFactura(){
        return `\t\tEmpresa: ${this.nombre}\n\t\tDireccion Fiscal: ${this.direccionFiscal}\n\t\tCliente: ${this.usuario}\n\t\tFecha: ${this.fecha}\n\t\tTotal en soles: ${this.total}\n\t\tDireccion del cliente: ${this.direccionUsuario}\n`
    }
}

const producto1 = new Producto("Respuesto para moto",150,"Repuesto para soporte trasero de moto", 10)
const producto2 = new Producto("Repuesto para carro",300,"Repuesto de espejo",8)

const carrito = new CarritoDeCompras()
carrito.agregaP(producto1)
carrito.agregaP(producto2)
carrito.agregarDesc("DSC30")

const pedido = new Pedido(carrito, "Surco", "efectivo")
pedido.envioPremiun()
//console.log(pedido)

const tienda1 = new Tienda("Mi_tiendita.com","av. benavides 343")

const factura1 = new Factura(tienda1, "Jorge", carrito, "Pj. rosario 332","12-06-2023")
console.log(factura1)
console.log(factura1.toEmail("Jorge@hotmail.com"))

console.log(factura1.emitirFactura())
//4. Implementar una clase "Pedido" que tenga propiedades como fecha, productos seleccionados, 
//dirección de envío y método de pago. Incluye métodos para calcular el total del pedido, confirmar el pedido
// y mostrar los detalles del pedido.

const CarritoDeCompras = require("./Eje2")
const Producto = require("./Eje1")


class Pedido{
    constructor(carrito, direccion, metodoPago){;
        const{productos,total} = carrito;
        this.total = total;
        this.productos = productos;
        this.direccion = direccion.toLowerCase();
        this.metodoPago = metodoPago;
        this.newFecha;
        this.envioRapido = false;
        this.codigoDePedido;
    }

    envioPremiun(){

        this.envioRapido = true;
        console.log("Has elegido envio rapido!\n---------------")

    }

    confirmarPedido(){
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        this.codigoDePedido = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < 15; i++ ) {
            this.codigoDePedido += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        
        let zonaDelivery = ["surco","miraflores","lince","san Isidro","barranco"]

        if(zonaDelivery.includes(this.direccion)){
            console.log("Direccion Acpetada\n---------------")
        }else{
            this.direccion = "No valido"
            console.log("Zona sin cobertura\n---------------")
        }

        let hoy = new Date();
        let dia = hoy.getDate();
        let mes = hoy.getMonth()+1;
        let anio = hoy.getFullYear();
        this.fecha = `${anio}-${mes}-${dia}`

        if (this.envioRapido == true){
            this.newFecha = 3
        }else{
            this.newFecha = 7
        }


        return `Tu pedido realizado el día ${this.fecha} llegara en ${this.newFecha} días.\nIncluye: \n\t${this.productos}\nEl importe total es: s/. ${this.total}\nPara la direccion: ${this.direccion}\nMetodo de pago es: ${this.metodoPago}\nSu codigo de pedido para el rastreo es\n${this.codigoDePedido}`
    }
}
const producto1 = new Producto("Respuesto para moto",150,"Repuesto para soporte trasero de moto", 10)
const producto2 = new Producto("Repuesto para carro",300,"Repuesto de espejo",8)

const carrito = new CarritoDeCompras()
carrito.agregaP(producto1)
carrito.agregaP(producto2)
carrito.agregarDesc("DSC30")

const pedido = new Pedido(carrito, "Suco", "efectivo")
pedido.envioPremiun()
console.log(pedido.confirmarPedido())
//console.log(carrito)
console.log(pedido)



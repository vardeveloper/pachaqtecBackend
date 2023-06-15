//2. Implementar una clase "CarritoDeCompras" que tenga un arreglo para almacenar los productos agregados al carrito. Incluye métodos para agregar un producto, eliminar un producto y calcular el total de la compra.
const Producto = require("./Eje1")

class CarritoDeCompras{
    constructor(){
      this.conteo = 0;
      this.productos = [];
      this.total = 0;
      this.descuento = []
      this.cupon = false
      
    }
    agregaP(valor){
      const{nombre, precio}=valor;
      this.productos.push(nombre);
      this.total += precio
      this.conteo +=1
      } 
  
    agregarDesc(codigo){
        this.cupon = true
        const codigoPromo = ["DSC20","DSC30","DSC50"]
        switch(codigo){
            case codigoPromo[0]:
                this.total *= 0.8
                this.descuento.push(codigo)
                break;
            case codigoPromo[1]:
                this.total *= 0.7
                this.descuento.push(codigo)
                break;
            case codigoPromo[2]:
                this.total *= 0.5
                this.descuento.push(codigo)
                break;
            default :
                console.log("Codigo invalido")
        }    
    }
    confirmacion(){
      return `fecha ${this.fecha}\n Tus ${this.conteo} productos son:\n\n\t ${this.productos}\n\n El total con el codigo \n\n \t ${this.descuento}: s/. ${this.total}\n`
    }
}
module.exports = CarritoDeCompras
/*
const carrito = new CarritoDeCompras()
const producto1 = new Producto("Respuesto para moto",150,"Repuesto para soporte trasero de moto", 10)
const producto2 = new Producto("Repuesto para carro",300,"Repuesto de espejo",8)
carrito.agregaP(producto1)
carrito.agregaP(producto2)
console.log(carrito) 
carrito.agregaP(producto1)
carrito.agregaP(producto2)

carrito.agregarDesc("DSC50")
carrito.agregarFecha()
console.log(carrito)
console.log(carrito.confirmacion())
*/

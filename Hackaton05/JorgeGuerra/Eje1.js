class Producto {
    constructor(nombre, precio, descripcion, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.stock = stock;
        this.promocion = false
    }    
    activaPromo50(){
      this.promocion = true;
      this.precio = this.precio * 0.5
    }
    activaPromo25(){
      this.promocion = true;
      this.precio = this.precio * 0.25
    }
    compra(){
      this.stock = this.stock -1
    }
}
module.exports = Producto
/*
const productos = []
const producto1 = new Producto("Respuesto para moto",150,"Repuesto para soporte trasero de moto", 10)
const producto2 = new Producto("Repeusto para carro",300,"Repuesto de espejo",8)  

producto1.activaPromo50()
producto1.compra()

productos.push(producto1)
productos.push(producto2)
*/


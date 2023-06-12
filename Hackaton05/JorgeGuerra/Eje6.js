//6. Implementar una clase "Tienda" que tenga propiedades como nombre,
//dirección y lista de productos disponibles. Incluye métodos para agregar
// productos a la tienda, buscar productos por nombre y mostrar todos 
//los productos disponibles.

class Tienda{
    constructor(nombre, direccion){
        this.nombre = nombre;
        this.direccion = direccion;
        this.productos = []
    }
    agregarProd(nombre, precio, stock){
        this.productos.push([nombre.toLowerCase(),precio,stock])
    }
    get MostrarProduc(){
        return this.productos
    }

    BuscarProd(nombre){
        for(let i = 0; i<this.productos.length;i++){
            for(let j = 0; j< this.productos[i].length;j++){
                if(this.productos[i][j]==nombre.toLowerCase()){
                    return `el producto: ${this.productos[i][j]}\ntiene el precio de ${this.productos[i][1]}\nHay ${this.productos[i][2]} en stock`
                }else{
                    return 'Producto no existe'
                }
            }
        }
    }

}
const nuevaTienda = new Tienda("Mi tiendita.com","av. higuereta 123")
nuevaTienda.agregarProd("celular Samsung",1990,18)
nuevaTienda.agregarProd("celular Iphone",3000,15)
nuevaTienda.agregarProd("celular Xiomy",1300,20)
nuevaTienda.agregarProd("celular Motorola",1500,17)
console.log(nuevaTienda)
console.log(nuevaTienda.BuscarProd("celular samsung"))
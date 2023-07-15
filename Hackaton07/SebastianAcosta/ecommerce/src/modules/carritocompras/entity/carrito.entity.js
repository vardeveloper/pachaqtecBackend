class CarritoCompras {
    constructor() {
      this.productos = [];
    }
    agregarProductos(producto) {
      const existeproducto= this.productos.find((e)=>{
        if  (e.id === producto.id){
            return e;
        } else {
          return;
        }
      })
      console.log(existeproducto);
      if(existeproducto){
        existeproducto.units = existeproducto.units + 1;
      }
      else {
        producto.units = 1;
        this.productos.push(producto);
      }
    }
    buscarProductos(value) {
      const existeproducto= this.productos.find((e)=>{
        if  (e.id == value){
            return e;
        } else {
          return;
        }
      })
      
        return existeproducto;
    }
    get getLista() {
      return this.productos;
    }
    get precio() {
        let total = 0;
        this.productos.forEach((producto) => {
          total += producto.precio;
        });
        return total;
    }
  }
  
  const Carrito = new CarritoCompras();
  
  module.exports = Carrito;
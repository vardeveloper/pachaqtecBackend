const Product = require("../../product/entity/product.entity");

class Almacen {
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
        existeproducto.stock = existeproducto.stock +producto.stock;
      }
      else {
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
    productosDisponibles(stock) {
      return this.productos.filter((producto) => producto.stock >= 0);
    }
    get getLista() {
      return this.productos;
    }
  }
  
  const newAlmacen = new Almacen();
  
  module.exports = newAlmacen;
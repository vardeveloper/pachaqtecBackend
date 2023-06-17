// 1. Crear una clase "Producto" que tenga propiedades como nombre, precio, descripción y cantidad en stock.
// Incluye métodos para obtener y actualizar estas propiedades.

class Producto {
    constructor(nombre, precio, descripcion, cantidadEnStock) {
      this.nombre = nombre;
      this.precio = precio;
      this.descripcion = descripcion;
      this.cantidadEnStock = cantidadEnStock;
    }
  
    // Métodos para obtener y actualizar las propiedades
    obtenerNombre() {
      return this.nombre;
    }
  
    establecerNombre(nombre) {
      this.nombre = nombre;
    }
  
    obtenerPrecio() {
      return this.precio;
    }
  
    establecerPrecio(precio) {
      this.precio = precio;
    }
  
    obtenerDescripcion() {
      return this.descripcion;
    }
  
    establecerDescripcion(descripcion) {
      this.descripcion = descripcion;
    }
  
    obtenerCantidadEnStock() {
      return this.cantidadEnStock;
    }
  
    establecerCantidadEnStock(cantidad) {
      this.cantidadEnStock = cantidad;
    }
  }  
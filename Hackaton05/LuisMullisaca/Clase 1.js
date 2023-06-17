class Producto {
    constructor(nombre, precio, descripcion, cantidadStock) {
      this.nombre = nombre;
      this.precio = precio;
      this.descripcion = descripcion;
      this.cantidadStock = cantidadStock;
    }
  






    // metodos para obtener y actualizar propiedades


    obtenerNombre() {
      return this.nombre;
    }
    actualizarNombre(nuevoNombre) {
      this.nombre = nuevoNombre;
    }
  
    obtenerPrecio() {
      return this.precio;
    }

    





    
    actualizarPrecio(nuevoPrecio) {
      this.precio = nuevoPrecio;
    }
  
    obtenerDescripcion() {
      return this.descripcion;
    }
  



    actualizarDescripcion(nuevaDescripcion) {
      this.descripcion = nuevaDescripcion;
    }
  



    obtenerCantidadStock() {
      return this.cantidadStock;
    }
  





    actualizarCantidadStock(nuevaCantidadStock) {
      this.cantidadStock = nuevaCantidadStock;
    }
  }
  
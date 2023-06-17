class Producto {
  constructor(nombre, precio, descripcion, cantidadStock) {
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.cantidadStock = cantidadStock;
  }

  obtenerNombre() {
    return this.nombre;
  }

  obtenerPrecio() {
    return this.precio;
  }

  obtenerDescripcion() {
    return this.descripcion;
  }

  obtenerCantidadStock() {
    return this.cantidadStock;
  }

  actualizarNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }

  actualizarPrecio(nuevoPrecio) {
    this.precio = nuevoPrecio;
  }

  actualizarDescripcion(nuevaDescripcion) {
    this.descripcion = nuevaDescripcion;
  }

  actualizarCantidadStock(nuevaCantidadStock) {
    this.cantidadStock = nuevaCantidadStock;
  }

  imprimirInformacion() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Precio: ${this.precio}`);
    console.log(`Descripción: ${this.descripcion}`);
    console.log(`Stock: ${this.cantidadStock}`);
  }
}

// Ejemplo
let producto = new Producto("Corsair", 185, "Corsair Mouse", 10);

producto.imprimirInformacion();

// 6. Implementar una clase "Tienda" que tenga propiedades como nombre, dirección y lista de productos disponibles. Incluye métodos para agregar productos a la tienda, buscar productos por nombre y mostrar todos los productos disponibles.

class Tienda {
    constructor(nombre, direccion) {
      this.nombre = nombre;
      this.direccion = direccion;
      this.productosDisponibles = [];
    }
  
    agregarProducto(producto) {
      this.productosDisponibles.push(producto);
    }
  
    buscarProductoPorNombre(nombre) {
      const resultado = this.productosDisponibles.find(
        (producto) => producto.obtenerNombre() === nombre
      );
      return resultado ? resultado : 'Producto no encontrado';
    }
  
    mostrarProductosDisponibles() {
      for (let producto of this.productosDisponibles) {
        console.log(`Nombre: ${producto.obtenerNombre()}`);
        console.log(`Precio: ${producto.obtenerPrecio()}`);
        console.log(`Descripción: ${producto.obtenerDescripcion()}`);
        console.log(`Cantidad en stock: ${producto.obtenerCantidadEnStock()}`);
        console.log('---------------------------');
      }
    }
  }  
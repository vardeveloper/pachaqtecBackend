class Tienda {
    constructor(nombre, direccion) {
      this.nombre = nombre;
      this.direccion = direccion;
      this.productosDisponibles = [];
    }
  
    // metodo para agregar un producto a la tienda
    agregarProducto(producto) {
      this.productosDisponibles.push(producto);
      console.log(`El producto "${producto.nombre}" ha sido agregado a la tienda.`);
    }
  
    // metodo para buscar productos por nombre
    buscarProductoPorNombre(nombre) {
      const productosEncontrados = this.productosDisponibles.filter(
        (producto) => producto.nombre.toLowerCase().includes(nombre.toLowerCase())
      );
      return productosEncontrados;
    }
  
    // metodo para mostrar todos los productos disponibles
    mostrarProductosDisponibles() {
      console.log("Productos disponibles en la tienda:");
      this.productosDisponibles.forEach((producto) => {
        console.log("- ", producto.nombre);
      });
    }
  }
  
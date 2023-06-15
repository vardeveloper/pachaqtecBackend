class Categoria {
    constructor(nombre) {
      this.nombre = nombre;
      this.productos = [];
    }
  
    // metodo para agregar un producto a la categoria
    agregarProducto(producto) {
      this.productos.push(producto);
      console.log(`El producto "${producto.nombre}" ha sido agregado a la categoría "${this.nombre}".`);
    }
  




    
    // metodo para obtener la lista de productos de la categoria
    obtenerProductos() {
      return this.productos;
    }
  }
  
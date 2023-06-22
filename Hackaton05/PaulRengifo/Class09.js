class Categoria {
    constructor(nombre) {
      this.nombre = nombre;
      this.productos = [];
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
    }
  
    obtenerProductos() {
      return this.productos;
    }
  }
  
  // Ejemplo de uso
  const categoriaRopa = new Categoria("Ropa");
  
  categoriaRopa.agregarProducto("Camiseta");
  categoriaRopa.agregarProducto("Pantalón");
  categoriaRopa.agregarProducto("Zapatos");
  
  const productosCategoriaRopa = categoriaRopa.obtenerProductos();
  console.log("Productos en la categoría de Ropa:", productosCategoriaRopa);
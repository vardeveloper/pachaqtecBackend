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
  
  // Ejemplo
  class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  let categoria = new Categoria("Electrónica");
  
  let producto1 = new Producto("Televisor LG 50", 1500);
  let producto2 = new Producto("Computadora Intel Gama Media", 2800);
  
  categoria.agregarProducto(producto1);
  categoria.agregarProducto(producto2);
  
  let productosCategoria = categoria.obtenerProductos();
  
  console.log("Categoría: " + categoria.nombre);
  console.log("Productos: ");
  productosCategoria.forEach((producto) => {
    console.log(" - " + producto.nombre + " - Precio: " + producto.precio);
  });
  
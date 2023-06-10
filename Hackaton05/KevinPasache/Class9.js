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

class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
}
  
const categoriaRopa = new Categoria("Ropa");
  

const producto1 = new Producto("Camiseta", 25);
const producto2 = new Producto("Pantalón", 40);
const producto3 = new Producto("Calcetines", 10);
  

categoriaRopa.agregarProducto(producto1);
categoriaRopa.agregarProducto(producto2);
categoriaRopa.agregarProducto(producto3);
  

const productosCategoria = categoriaRopa.obtenerProductos();
  

console.log("Productos de la categoría", categoriaRopa.nombre);
  for (const producto of productosCategoria) {
    console.log("- ", producto.nombre);
}
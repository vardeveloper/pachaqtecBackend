//9. Crear una clase "Categoría" que represente las categorías de productos en la tienda. La clase debe tener propiedades como nombre de la categoría y una lista de productos asociados. Incluye métodos para agregar productos a la categoría y obtener la lista de productos.

class Categoria {
    constructor(nombreCategoria) {
      this.nombreCategoria = nombreCategoria;
      this.productosAsociados = [];
    }
  
    agregarProducto(producto) {
      this.productosAsociados.push(producto);
    }
  
    obtenerListaProductos() {
      return this.productosAsociados;
    }
  }  
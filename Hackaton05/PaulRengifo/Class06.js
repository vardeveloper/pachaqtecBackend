class Tienda {
    constructor(nombre, direccion) {
      this.nombre = nombre;
      this.direccion = direccion;
      this.productos = [];
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
    }
  
    buscarProducto(nombre) {
      const resultado = this.productos.filter(producto => producto.nombre === nombre);
      return resultado;
    }
  
    mostrarProductosDisponibles() {
      console.log(`Productos disponibles en ${this.nombre}:`);
      this.productos.forEach(producto => {
        console.log(`- ${producto.nombre}: ${producto.precio}`);
      });
    }
  }
  
  // Ejemplo de uso
  const miTienda = new Tienda("Mi Tienda", "Calle Principal 123");
  
  // Agregar productos
  miTienda.agregarProducto({ nombre: "Camiseta", precio: 20 });
  miTienda.agregarProducto({ nombre: "Pantalón", precio: 30 });
  miTienda.agregarProducto({ nombre: "Zapatos", precio: 50 });
  
  // Buscar productos
  const resultadoBusqueda = miTienda.buscarProducto("Camiseta");
  console.log("Resultado de la búsqueda:", resultadoBusqueda);
  
  // Mostrar todos los productos disponibles
  miTienda.mostrarProductosDisponibles();
class Tienda {
    constructor(nombre, direccion) {
      this.nombre = nombre;
      this.direccion = direccion;
      this.productosDisponibles = [];
    }
  
    agregarProducto(producto) {
      this.productosDisponibles.push(producto);
      console.log("Producto agregado a la tienda: " + producto.nombre);
    }
  
    buscarProductoPorNombre(nombre) {
      const resultado = this.productosDisponibles.filter(
        (producto) => producto.nombre === nombre
      );
  
      if (resultado.length > 0) {
        console.log('Producto encontrado:');
        resultado.forEach((producto) => {
          console.log("Nombre: " + producto.nombre + ", Precio: " + producto.precio);
        });
      } else {
        console.log("No se encontraron productos con ese nombre.");
      }
    }
  
    mostrarProductosDisponibles() {
      console.log("Productos disponibles en la tienda:");
      this.productosDisponibles.forEach((producto) => {
        console.log("Nombre: " + producto.nombre + ", Precio: " + producto.precio);
      });
    }
  }
  
  // Ejemplo
  class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  let tienda = new Tienda("Tia Veneno", "Calle Principal 526");
  
  let producto1 = new Producto("Anticucho", 20);
  let producto2 = new Producto("Sopa Seca", 14);
  let producto3 = new Producto("Carapulcra", 15);
  
  tienda.agregarProducto(producto1);
  tienda.agregarProducto(producto2);
  tienda.agregarProducto(producto3);
  
  tienda.buscarProductoPorNombre("Anticucho");
  tienda.buscarProductoPorNombre("Pollo");
  
  tienda.mostrarProductosDisponibles();
  
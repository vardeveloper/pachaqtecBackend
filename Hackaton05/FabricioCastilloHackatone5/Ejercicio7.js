class Promocion {
    constructor(producto, descuento, fechaInicio, fechaFin) {
      this.producto = producto;
      this.descuento = descuento;
      this.fechaInicio = fechaInicio;
      this.fechaFin = fechaFin;
    }
  
    estaActiva() {
      const fechaActual = new Date();
      return fechaActual >= this.fechaInicio && fechaActual <= this.fechaFin;
    }
  
    aplicarDescuento() {
      if (this.estaActiva()) {
        const precioOriginal = this.producto.precio;
        const descuentoAplicado = precioOriginal * (this.descuento / 100);
        const precioFinal = precioOriginal - descuentoAplicado;
        this.producto.precio = precioFinal;
  
        console.log("Descuento aplicado al producto " + this.producto.nombre + ": " + descuentoAplicado);
      } else {
        console.log("La promoción no está activa actualmente.");
      }
    }
  }
  
  // Ejemplo
 class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  marcarSeleccionado() {
    console.log("Producto seleccionado: " + this.nombre);
  }
}
  
  let producto = new Producto("Pantalla Samsung 165Hz ", 200);
  let promocion = new Promocion(producto, 18 , new Date("2023-06-01"), new Date("2023-06-30"));
  
  producto.marcarSeleccionado();
  
  console.log(promocion.estaActiva()); 
  
  promocion.aplicarDescuento(); 
  console.log(producto.precio); 
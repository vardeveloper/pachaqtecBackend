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
        const precioDescuento = this.producto.precio * (1 - this.descuento);
        this.producto.precio = precioDescuento;
        console.log(`Se aplicó un descuento del ${this.descuento * 100}% al producto ${this.producto.nombre}. Nuevo precio: ${precioDescuento}`);
      } else {
        console.log("La promoción no está activa actualmente.");
      }
    }
  }
  
  // Ejemplo de uso
  const productoEjemplo = { nombre: "Camiseta", precio: 20 };
  const promocionEjemplo = new Promocion(productoEjemplo, 0.2, new Date('2023-06-01'), new Date('2023-06-15'));
  
  // Verificar si la promoción está activa
  console.log("¿La promoción está activa?", promocionEjemplo.estaActiva());
  
  // Aplicar el descuento al producto
  promocionEjemplo.aplicarDescuento();
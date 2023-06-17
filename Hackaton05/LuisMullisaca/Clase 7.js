class Promocion {
    constructor(producto, descuento, fechaInicio, fechaFin) {
      this.producto = producto;
      this.descuento = descuento;
      this.fechaInicio = fechaInicio;
      this.fechaFin = fechaFin;
    }
  
    // metodo para verificar promocion activa
    estaActiva() {
      const fechaActual = new Date();
      return fechaActual >= this.fechaInicio && fechaActual <= this.fechaFin;
    }
  
    // metodo para aplicar el descuento al producto
    aplicarDescuento() {
      if (this.estaActiva()) {
        const precioOriginal = this.producto.precio;
        const descuentoAplicado = precioOriginal * (this.descuento / 100);
        const precioFinal = precioOriginal - descuentoAplicado;
  
        // actualizar el precio del producto
        this.producto.precio = precioFinal;
  
        console.log(
          `Se ha aplicado un descuento del ${this.descuento}% al producto "${this.producto.nombre}". Nuevo precio: $${precioFinal}`
        );
      } else {
        console.log("La promoción no está activa.");
      }
    }
  }
  
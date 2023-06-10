// 7. Crear una clase "Promoción" que represente una oferta especial en un producto. La clase debe tener propiedades como producto asociado, descuento y fechas de inicio y fin. Incluye métodos para verificar si la promoción está activa y aplicar el descuento al producto.

class Promocion {
    constructor(productoAsociado, descuento, fechaInicio, fechaFin) {
      this.productoAsociado = productoAsociado;
      this.descuento = descuento;
      this.fechaInicio = fechaInicio;
      this.fechaFin = fechaFin;
    }
  
    verificarPromocionActiva() {
      const fechaActual = new Date();
      return fechaActual >= this.fechaInicio && fechaActual <= this.fechaFin;
    }
  
    aplicarDescuentoAlProducto() {
      if (this.verificarPromocionActiva()) {
        const precioDescuento =
          this.productoAsociado.obtenerPrecio() - this.descuento;
        this.productoAsociado.establecerPrecio(precioDescuento);
        console.log('Descuento aplicado');
      } else {
        console.log('La promoción no está activa');
      }
    }
  }  
class Promocion {
    constructor(producto,descuento, fechaInicio, fechaFin) {
      this.producto = producto;
      this.descuento = descuento;
      this.fechaInicio = fechaInicio;
      this.fechaFin = fechaFin;
    }
    estaActiva() {
      const fechaActual = new Date();
      const fechaActual2 = this.fechaInicio <= fechaActual && fechaActual <= this.fechaFin;
      return fechaActual;
    }
  
    aplicarDescuento() {
      if (this.estaActiva()) {
        const precioDescuento = this.producto.precio - (this.producto.precio * this.descuento);
        return precioDescuento;
      } else {
        return this.producto.precio;
      }
    }
  }

class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }

const producto = new Producto("Laptop", 3599);
  
const promocion = new Promocion(producto, 0.2, new Date("01/06/2023"), new Date("11/06/2023"));
  
console.log("¿La promoción está activa?", promocion.estaActiva());
  
const precioFinal = promocion.aplicarDescuento();
console.log("Precio final: S./", precioFinal);
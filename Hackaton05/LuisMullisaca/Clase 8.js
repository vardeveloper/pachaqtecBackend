class Factura {
    constructor(nombreCliente, direccionEnvio, productosComprados) {
      this.nombreCliente = nombreCliente;
      this.direccionEnvio = direccionEnvio;
      this.productosComprados = productosComprados;
      this.totalCompra = this.calcularTotalCompra();
    }
  



    // metodo para calcular el total de la compra
    calcularTotalCompra() {
      let total = 0;
      this.productosComprados.forEach((producto) => {
        total += producto.precio;
      });
      return total;
    }
  



    // metodo para generar la factura en formato PDF
    generarPDF() {
      // logica para generar el PDF de la factura
      console.log("Factura generada en formato PDF.");
    }
  


    
    // metodo para enviar la factura por correo electrónico
    enviarPorCorreoElectronico() {
      // logica para enviar la factura por correo electrónico
      console.log("Factura enviada por correo electrónico.");
    }
  }
  
// 8. Implementar una clase "Factura" que represente la información de facturación de una compra. La clase debe tener propiedades como nombre del cliente, dirección de envío, productos comprados y total de la compra. Incluye métodos para generar la factura en formato PDF o enviarla por correo electrónico.

class Factura {
    constructor(nombreCliente, direccionEnvio, productosComprados) {
      this.nombreCliente = nombreCliente;
      this.direccionEnvio = direccionEnvio;
      this.productosComprados = productosComprados;
    }
  
    generarFacturaPDF() {
      // Lógica para generar la factura en formato PDF
      console.log('Factura generada en formato PDF');
    }
  
    enviarFacturaPorCorreo() {
      // Lógica para enviar la factura por correo electrónico
      console.log('Factura enviada por correo electrónico');
    }
  }  
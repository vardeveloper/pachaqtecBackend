//Implementar una clase "Factura" que represente la información de facturación de una compra. La clase debe tener propiedades como nombre del cliente, dirección de envío, productos comprados y total de la compra. 
//Incluye métodos para generar la factura en formato PDF o enviarla por correo electrónico.

class Invoice {
    constructor(customerName, shippingAddress, products, totalAmount) {
      this.customerName = customerName;
      this.shippingAddress = shippingAddress;
      this.products = products;
      this.totalAmount = totalAmount;
    }
  
    generatePDFInvoice() {
      console.log("PDF Invoice generated.");
    }
  
    sendEmailInvoice() {
      console.log("Email Invoice sent.");
    }
  }
  
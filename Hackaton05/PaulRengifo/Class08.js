const PDFDocument = require('pdfkit');
const nodemailer = require('nodemailer');

class Factura {
  constructor(cliente, direccionEnvio, productos, total) {
    this.cliente = cliente;
    this.direccionEnvio = direccionEnvio;
    this.productos = productos;
    this.total = total;
  }

  generarFacturaPDF() {
    const doc = new PDFDocument();
    doc.fontSize(18).text('Factura de Compra', { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text(`Cliente: ${this.cliente}`);
    doc.fontSize(12).text(`Dirección de envío: ${this.direccionEnvio}`);
    doc.moveDown();
    doc.fontSize(14).text('Productos:');
    doc.moveDown();

    this.productos.forEach((producto, index) => {
      doc.fontSize(12).text(`${index + 1}. ${producto.nombre}: $${producto.precio}`);
    });

    doc.moveDown();
    doc.fontSize(14).text(`Total: $${this.total}`);
    doc.end();

    doc.pipe(fs.createWriteStream('factura.pdf'));
  }

  enviarFacturaPorCorreo(destinatario, asunto, mensaje) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'tu_correo@gmail.com',
        pass: 'tu_contraseña'
      }
    });

    const mailOptions = {
      from: 'tu_correo@gmail.com',
      to: destinatario,
      subject: asunto,
      text: mensaje,
      attachments: [{
        filename: 'factura.pdf',
        path: './factura.pdf',
        contentType: 'application/pdf'
      }]
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error al enviar la factura por correo electrónico:', error);
      } else {
        console.log('La factura se envió correctamente por correo electrónico:', info.response);
      }
    });
  }
}

// Ejemplo de uso
const productosEjemplo = [
  { nombre: "Camiseta", precio: 20 },
  { nombre: "Pantalón", precio: 30 },
  { nombre: "Zapatos", precio: 50 }
];
const totalEjemplo = productosEjemplo.reduce((total, producto) => total + producto.precio, 0);

const facturaEjemplo = new Factura("Juan Pérez", "Calle Principal 123", productosEjemplo, totalEjemplo);

// Generar factura en formato PDF
facturaEjemplo.generarFacturaPDF();

// Enviar factura por correo electrónico
facturaEjemplo.enviarFacturaPorCorreo('cliente@example.com', 'Factura de compra', 'Adjunto encontrarás la factura de tu compra.');
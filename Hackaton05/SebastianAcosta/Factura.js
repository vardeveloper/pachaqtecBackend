class Factura{
    constructor (cliente , direccion  ,productos , total){
        this.cliente = cliente;
        this.direccion = direccion;
        this.productos = productos;
        this.total = total;
    }

    generarFactura(){
        var doc = new jsPDF();
        doc.text(10, 10, this.direccion);
        doc.save('factura.pdf');
    }

}
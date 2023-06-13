class Promocion{
    constructor (producto , descuento ,fechainicio, fechafin){
        this.producto = producto;
        this.descuento = descuento;
        this.fechainicio = fechainicio;
        this.fechafin = fechafin;
        this.active = false;
    }

    activarPromocion(){
        this.active = true;
    }

    aplicarDescuentro(descuento){
        this.producto.precio= this.producto.precio*descuento;
    }
}
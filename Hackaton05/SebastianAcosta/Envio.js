class Categoria{
    constructor (direccion ,entrega, estado){
        this.direccion  = direccion;
        this.entrega = entrega;
        this.estado = estado;
    }

    actualizarEstado(estad){
        this.estado= estado;
    }

    fechaEntrega(){
        return this.entrega;
    }
}
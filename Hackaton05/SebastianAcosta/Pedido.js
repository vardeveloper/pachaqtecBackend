class Pedido{
    constructor (fecha, dirección ,metodo, productos){
        this.fecha = fecha;
        this.productos = productos;
        this.dirección = dirección;
        this.metodo = metodo;
        this.confirmacion = false;
    }

    todosAtributos(){
        return {
            fecha: this.fecha,
            dirección: this.dirección,
            metodo: this.metodo,
            productos: this.productos,
            confirmacion: this.confirmacion
        };
    }

    confirmarPedido(){
        this.confirmacion = true;
    }

    totalPedido(){
        return this.products.reduce((acumulador, objeto)=> acumulador + objeto.precio,0);
    }

}
class Pedido{
    constructor(delivery_date, request_date, products, shipping_address,payment_method){
        this.delivery_date = delivery_date;
        this.request_date = request_date;
        this.products = products;
        this.shipping_address = shipping_address;
        this.payment_method = payment_method;
        this.is_confirmed = false;
    }

    details(){
        console.log("Detalles del Pedido");
        console.log(`Fecha de Solicitud   : ${this.request_date}`);
        console.log(`Fecha de Entrega     : ${this.delivery_date}`);
        console.log(`Direccion de entrega : ${this.shipping_address}`);
        console.log("Nombre del Producto | Precio Unitario | Cantidad");
        for (let i = 0; this.products.length; i++){
            let product = this.products[i];
            console.log(`${product.name} | ${product.price} | ${product.amount}`)
        }
    }

    confirm_order(){
        this.is_confirmed = true;
    }

    get_total_price(){
        let total_price = 0;
        for(let i = 0; i < this.cart.length; i++){
            let product = this.products[i];
            total_price += product.price * product.amount;
        }
        console.log(total_price);
        return total_price
    }
}
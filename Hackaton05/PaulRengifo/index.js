

class Product{
    constructor(id,name, price, description, stock){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.stock = stock;
    }

    set update_name(new_name){
        this.name = new_name
    }
    set update_price(new_price){
        this.price = new_price
    }
    set update_description(new_description){
        this.description = new_description
    }
    set update_stock(new_stock){
        if (new_stock <= 0){
            console.log("Debes ingresar una cantidad >= 0");
        }else{
            this.stock = new_stock
        }
    }

    get get_stock(){
        return this.stock
    }

    get get_name(){
        return this.name
    }

    get get_id(){
        return this.id
    }
    get get_price(){
        return this.price
    }
}

class ShoppingCart{
    constructor (){
        this.cart = [];
    }

    find_product(product){
        return this.cart.filter(p => p.get_id == product.get_id)
    }

    add_product(product, amount){
        console.log("Añadiendo producto");
        let index_object = this.cart.findIndex(obj => obj.id == product.get_id);
        if (product.get_stock < amount){
            console.log("No hay suficiente producto en el stock");
        }else if (index_object != -1){
            this.cart[index_object].amount += amount;
        }else{
            this.cart.push({
                'id' : product.get_id,
                'name' : product.get_name,
                'price' : product.get_price,
                'amount' : amount
            });
        }
        product.update_stock = product.get_stock - amount;
    }

    del_product(product){
        let index_object = this.cart.findIndex(obj => obj.id == product.get_id);
        this.cart.splice(index_object,1);
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

class User{
    constructor(name, last_name, email, password){
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.is_logged = false
        this.last_login = NaN
        this.last_session_duration = NaN
    }

    login (){
        this.is_logged = true;
        this.last_login = new Date();
    }

    logout(){
        this.is_logged = false;
        let now = new Date();
        this.last_session_duration = now - this.last_login;
    }

    info (){
        let active = 'inactivo';
        if (this.is_logged){
            active = 'activo';
        }
        console.log(`El usuario ${this.name} esta ${active}`);
        console.log(`Ultima fecha de conexion ${this.last_login}`);
        console.log(`Duracion de ultima conexion ${this.last_session_duration / 1000} segundos`);
        
    }

}

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


producto1 = new Product(1, 'cuaderno', 5.6, 'Cuaderno anillado', 50);
producto2 = new Product(2, 'lapicero', 1.5, 'Lapicero', 100);
producto3 = new Product(3, 'borrador', 0.5, 'Borrador', 1000);
//console.log(producto1);
//console.log(producto2);
//console.log(producto3);


shoping_cart = new ShoppingCart()
shoping_cart.add_product(producto1,2)
console.log(shoping_cart);
shoping_cart.add_product(producto1,3)
console.log(shoping_cart);
shoping_cart.add_product(producto3,150)
console.log(shoping_cart);
console.log(producto1);
//shoping_cart.del_product(producto3);
console.log(shoping_cart);
shoping_cart.get_total_price();

user1 = new User('marcia', 'espino', 'marcia.espino@contoso.com', '123456');
user1.login();
setTimeout(()=>{
    user1.logout();
    user1.info();
},5000);

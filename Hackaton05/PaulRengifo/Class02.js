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
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
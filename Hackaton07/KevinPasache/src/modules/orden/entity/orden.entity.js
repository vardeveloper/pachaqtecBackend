class Order {
    constructor(date,products,address,payment) {
        this.date = date;
        this.products = products;
        this.address = address;
        this.payment = payment;
        this.confirmedOrder = false;
    }
    conformidad(){
        document.write("Pedido confirmado exitosamente </br>")
        this.confirmedOrder = true;
    }
    get getProducts(){
        return this.products;
    }
}

const order1 = new Order("09/06/2023",["Laptop","Mac",6599],"Mi casa","Credit Card")
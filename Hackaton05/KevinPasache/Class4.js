class Order {
    constructor(date,products,address,payment) {
        this.date = date;
        this.products = products;
        this.address = address;
        this.payment = payment;
        this.confirmedOrder = false;
    }
    accordance(){
        document.write("Pedido confirmado exitosamente </br>")
        this.confirmedOrder = true;
    }
    get getProducts(){
        return this.products;
    }
}

const order1 = new Order("09/06/2023",["Laptop","Mac",6599],"Mi casa","Credit Card")
const order2 = new Order("10/06/2023",["Tv","LG",8999],"Tu casa", "Debit Card")
//document.write((order2.getProducts) + "<br>")
//document.write(order1.getProducts)


const product1 = order1.getProducts.find(objeto => !isNaN (objeto))
//document.write((product1) + "<br>")
const product2 = order2.getProducts.find(objeto => !isNaN (objeto))
//document.write(product2)

document.write("El total de su pedido es de S./" + (product1 + product2))

//order1.accordance();
//document.write(order1.confirmedOrder) 
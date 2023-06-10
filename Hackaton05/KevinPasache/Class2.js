class ShoppingCart {
    constructor(id,name,price){
        this.id = id;
        this.name = name;
        this. price = price;
    }
}

const product1 = new ShoppingCart(1, "laptop", 3599)
const product2 = new ShoppingCart(2, "mouse", 299)
const product3 = new ShoppingCart(3, "keyboard",699)

const products = [];
products.push(product1)
products.push(product2)
products.push(product3)
console.log(products)

const totalPurchase = products.reduce((accumulator,object) => accumulator + object.price,0);
document.write(`Monto total a pagar de su compra es: S./${totalPurchase}`)

//Eliminando el último elemento de un array
//products.pop();
//console.log(products);

// Eliminando el objeto del array por indice
//const index = 2
//products.splice(index, 1)
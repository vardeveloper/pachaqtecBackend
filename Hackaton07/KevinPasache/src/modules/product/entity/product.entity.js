class Product {
    constructor(name, price, description, stock) {
      this.name = name;
      this.price = price;
      this.description = description;
      this.stock = stock;
    }
    get getInfo() {
      return {
        Marca: this.name,
        Precio: this.price,
        Modelo: this.description,
        Unidades: this.stock,
      };
    }
    get getName() {
      return this.name;
    }
    get getPrice() {
      return this.price;
    }
    get getDescription() {
      return this.description;
    }
    get getStock() {
      return this.stock;
    }
    set setName(newName) {
      this.name = newName;
    }
    set setPrice(newPrice) {
      this.price = newPrice;
    }
    set setDescription(newDescription) {
      this.description = newDescription;
    }
    set setStock(newStock) {
      this.stock = newStock;
    }
  }
  
  module.exports = Product;  
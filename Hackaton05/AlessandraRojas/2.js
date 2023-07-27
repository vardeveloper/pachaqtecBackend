//Implementar una clase "CarritoDeCompras" que tenga un arreglo para almacenar los productos agregados al carrito. 
// Incluye métodos para agregar un producto, eliminar un producto y calcular el total de la compra.

class ShoppingCart {
    constructor() {
      this.productsInCart = [];
    }
  
    addProduct(product, quantity) {
      if (quantity <= 0 || !Number.isInteger(quantity)) {
        throw new Error("Quantity should be a positive integer.");
      }
  
      let existingItem = null;
      for (let i = 0; i < this.productsInCart.length; i++) {
        if (this.productsInCart[i].product === product) {
          existingItem = this.productsInCart[i];
          break;
        }
      }
  
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.productsInCart.push({ product: product, quantity: quantity });
      }
    }
  
    removeProduct(product) {
      let index = -1;
      for (let i = 0; i < this.productsInCart.length; i++) {
        if (this.productsInCart[i].product === product) {
          index = i;
          break;
        }
      }
  
      if (index !== -1) {
        this.productsInCart.splice(index, 1);
      } else {
        throw new Error("Product not found in the cart.");
      }
    }
  
    getTotalPrice() {
      let total = 0;
  
      for (let i = 0; i < this.productsInCart.length; i++) {
        const item = this.productsInCart[i];
        total += item.product.price * item.quantity;
      }
  
      return total;
    }
  
    getTotalItems() {
      return this.productsInCart.length;
    }
  
    clearCart() {
      this.productsInCart = [];
    }
  }
  

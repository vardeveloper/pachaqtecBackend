const ShoppingCart = require('../shoppingCart/entity');

class User {
  constructor(userId, name, email, password) {
    this.userId = userId;
    this.name = name;
    this.email = email;
    this.password = password;
    this.loggedIn = false;
    this.shippingAddress = null;
    this.shoppingCart = new ShoppingCart(); // Include the shopping cart
  }
  
    login(email, password) {
        if (email === this.email && password === this.password) {
          this.loggedIn = true;
          this.shippingAddress = "...";
          return true;
        }
        return false;
    }
    
    updateShippingAddress(newAddress) {
        this.shippingAddress = newAddress;
    }
  
    logout() {
      this.loggedIn = false;
    }
  
    checkLoginStatus() {
      return this.loggedIn;
    }

    addToCart(product, quantity) {
      this.shoppingCart.addProduct(product, quantity);
    }
  
    removeFromCart(product) {
      this.shoppingCart.removeProduct(product);
    }
  
    getTotalCartPrice() {
      return this.shoppingCart.getTotalPrice();
    }
  
    getTotalCartItems() {
      return this.shoppingCart.getTotalItems();
    }
  
    clearCart() {
      this.shoppingCart.clearCart();
    }
  }
  
  module.exports = User;
const Store = require('./entity');

let store = new Store("My Store", "123 La Molina");

class StoreService {
  // Method to add a new product to the store
  addProductToStore(product) {
    store.addProductToStore(product);
  }

  // Method to get all products in the store
  getAllProducts() {
    return store.availableProducts;
  }

  // Method to create a new category
  createCategory(categoryName) {
    store.createCategory(categoryName);
  }

  // Method to add a product to a specific category
  addProductToCategory(categoryName, product) {
    store.addProductToCategory(categoryName, product);
  }

  // Method to get all products in a specific category
  getProductsByCategory(categoryName) {
    return store.getProductsByCategory(categoryName);
  }

  // Method to get the store's address
  getStoreAddress() {
    return store.getStoreAddress();
  }
}

module.exports = new StoreService();

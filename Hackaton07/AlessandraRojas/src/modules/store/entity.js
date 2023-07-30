class Store {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.availableProducts = [];
    this.categories = [];
  }

  addProductToStore(product) {
    const existingProduct = this.findProductByName(product.name);

    if (existingProduct) {
      console.log("Product with the same name already exists.");
      return;
    }

    this.availableProducts.push(product);
    console.log("Product added successfully.");
  }

  findProductByName(name) {
    for (let i = 0; i < this.availableProducts.length; i++) {
      const product = this.availableProducts[i];
      if (product.name === name) {
        return product;
      }
    }
    return null;
  }

  showAllProducts() {
    console.log("Available Products:");
    for (let i = 0; i < this.availableProducts.length; i++) {
      const product = this.availableProducts[i];
      console.log(product.name, "- Price:", product.price);
    }
  }

  createCategory(name) {
    const newCategory = new Category(name);
    this.categories.push(newCategory);
    console.log("Category created successfully.");
  }

  addProductToCategory(categoryName, product) {
    const category = this.findCategoryByName(categoryName);
    if (category) {
      category.addProductToCategory(product);
      console.log("Product added to the category successfully.");
    } else {
      console.log("Category not found.");
    }
  }

  findCategoryByName(name) {
    for (let i = 0; i < this.categories.length; i++) {
      const category = this.categories[i];
      if (category.name === name) {
        return category;
      }
    }
    return null;
  }

  getProductsByCategory(categoryName) {
    const category = this.findCategoryByName(categoryName);
    if (category) {
      return category.getProductsInCategory();
    } else {
      console.log("Category not found.");
      return [];
    }
  }

  getStoreAddress() {
      return this.address;
  }
}
  
  module.exports = Store;
  
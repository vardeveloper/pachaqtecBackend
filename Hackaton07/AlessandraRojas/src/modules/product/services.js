const Product = require('./entity');

let products = [];

class ProductService {
  getAllProducts() {
    return products;
  }

  getProductById(productId) {
    return products.find(product => product.id === productId);
  }

  createProduct(newProduct) {
    const product = new Product(
      products.length + 1,
      newProduct.name,
      newProduct.price,
      newProduct.description,
      newProduct.quantityInStock
    );
    products.push(product);
    return product;
  }

  updateProduct(productId, dataToUpdate) {
    const product = products.find(product => product.id === productId);
    if (!product) return null;

    if (dataToUpdate.name) product.setName = dataToUpdate.name;
    if (dataToUpdate.price) product.setPrice = dataToUpdate.price;
    if (dataToUpdate.description) product.setDescription = dataToUpdate.description;
    if (dataToUpdate.quantityInStock) product.setQuantityInStock = dataToUpdate.quantityInStock;

    return product;
  }

  deleteProduct(productId) {
    products = products.filter(product => product.id !== productId);
  }
}

module.exports = new ProductService();


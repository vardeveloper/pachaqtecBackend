//Crear una clase "Categoría" que represente las categorías de productos en la tienda. La clase debe tener propiedades como nombre de la categoría y una lista de productos asociados. 
//Incluye métodos para agregar productos a la categoría y obtener la lista de productos.

class Category {
    constructor(name) {
      this.name = name;
      this.associatedProducts = []; //holds category of product
    }
  
    addProductToCategory(product) {
      this.associatedProducts.push(product);
    }
  
    getProductsInCategory() {
      return this.associatedProducts;
    }
  }
  
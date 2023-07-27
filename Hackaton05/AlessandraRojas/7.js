//Crear una clase "Promoción" que represente una oferta especial en un producto. La clase debe tener propiedades como producto asociado, descuento y fechas de inicio y fin. 
//Incluye métodos para verificar si la promoción está activa y aplicar el descuento al producto.

class Promotion {
    constructor(product, discount, startDate, endDate) {
      this.product = product;
      this.discount = discount;
      this.startDate = startDate;
      this.endDate = endDate;
    }
  
    isPromotionActive() {
      const currentDate = new Date();
      return currentDate >= this.startDate && currentDate <= this.endDate;
    }
  
    applyDiscount() {
      if (this.isPromotionActive()) {
        this.product.price -= this.product.price * (this.discount / 100);
        console.log(
          `${this.product.name} has a ${this.discount}% discount applied. New price: ${this.product.price}`
        );
      } else {
        console.log("Promotion is not active.");
      }
    }
  }
  
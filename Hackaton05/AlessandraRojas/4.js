// Implementar una clase "Pedido" que tenga propiedades como fecha, productos seleccionados, dirección de envío y método de pago.
// Incluye métodos para calcular el total del pedido (hecho en 2.js) , confirmar el pedido y mostrar los detalles del pedido.

class Order {
    constructor(orderId, date, user, shoppingCart, paymentMethod) {
        this.orderId = orderId;
        this.date = date;
        this.user = user;
        this.shoppingCart = shoppingCart;
        this.paymentMethod = paymentMethod;
    }
  
    confirmOrder() {
      console.log("Order confirmed!");
      this.showOrderDetails();
    }

    generateInvoice() {
        const invoice = new Invoice(
          this.user.name,
          this.user.shippingAddress, 
          this.shoppingCart.productsInCart,
          this.shoppingCart.getTotalPrice()
        );    
  
      invoice.generatePDFInvoice();
      invoice.sendEmailInvoice();
    }
  
    isPromotionActive(promotion) {
      return promotion.isPromotionActive();
    }
  
    showOrderDetails() {
        console.log("Order ID:", this.orderId);
        console.log("Order Date:", this.date);
        console.log("User ID:", this.user.userId);
        console.log("User Name:", this.user.name);
        console.log("Selected Products:", this.shoppingCart.productsInCart);
        console.log("Shipping Address:", this.user.shippingAddress); 
        console.log("Payment Method:", this.paymentMethod);
        console.log("Total:", this.shoppingCart.getTotalPrice());
      }
    }

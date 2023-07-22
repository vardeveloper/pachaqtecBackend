//Implementar una clase "Envío" que represente los detalles de envío de un pedido. 
//La clase debe tener propiedades como dirección de envío, fecha de entrega estimada y estado de envío. Incluye métodos para actualizar el estado de envío y calcular la fecha de entrega estimada.


class Shipping {
    constructor(shippingAddress, estimatedDeliveryDate, shippingStatus) {
      this.shippingAddress = shippingAddress;
      this.estimatedDeliveryDate = estimatedDeliveryDate;
      this.shippingStatus = shippingStatus;
    }
  
    updateShippingStatus(status) {
      this.shippingStatus = status;
    }
  
    calculateEstimatedDeliveryDate(user, store) {
        const userAddress = user.shippingAddress;
        const storeAddress = store.getStoreAddress();
        const pricePerKilometer = 0.5;
    
        // usaria un Api para encontrar la distancia en km entre una direccion y otra
        
        const currentDate = new Date();
        const estimatedDeliveryDate = new Date(currentDate.setDate(currentDate.getDate() + estimatedDeliveryTimeInDays));
    
        const shippingCost = distanceInKilometers * pricePerKilometer;
    
        this.estimatedDeliveryDate = estimatedDeliveryDate;
        this.shippingCost = shippingCost;
    
      }
    
  }


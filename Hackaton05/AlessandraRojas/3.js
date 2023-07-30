//Crear una clase "Usuario" con propiedades como nombre, dirección de correo electrónico y contraseña. 
//Incluye métodos para iniciar sesión, cerrar sesión y verificar la información de inicio de sesión.

class User {
    constructor(userId, name, email, password) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.loggedIn = false;
        this.shippingAddress = null; 
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
  }
  
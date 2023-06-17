class Usuario {
    constructor(nombre, correo, contraseña) {
      this.nombre = nombre;
      this.correo = correo;
      this.contraseña = contraseña;
      this.sesionIniciada = false;
    }

    



    // metodo para iniciar sesion
    
    iniciarSesion(correo, contraseña) {
      if (this.correo === correo && this.contraseña === contraseña) {
        this.sesionIniciada = true;
        console.log("Sesión iniciada correctamente.");
      } else {
        console.log("Error: Correo o contraseña incorrectos.");
      }
    }
    // metodo para cerrar sesion
    cerrarSesion() {
      this.sesionIniciada = false;
      console.log("Sesión cerrada correctamente.");
    }
  



    
    // metodo para verificar si la sesion esta iniciada
    
    verificarSesion() {
      if (this.sesionIniciada) {
        console.log("El usuario tiene la sesión iniciada.");
      } else {
        console.log("El usuario no tiene la sesión iniciada.");
      }
    }
  }
  
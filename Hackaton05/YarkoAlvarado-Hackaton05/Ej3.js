// 3. Crear una clase "Usuario" con propiedades como nombre, dirección de correo electrónico y contraseña. Incluye métodos para iniciar sesión, cerrar sesión y verificar la información de inicio de sesión.

class Usuario {
    constructor(nombre, correoElectronico, contrasena) {
      this.nombre = nombre;
      this.correoElectronico = correoElectronico;
      this.contrasena = contrasena;
      this.iniciadoSesion = false;
    }
  
    iniciarSesion(contrasena) {
      if (contrasena === this.contrasena) {
        this.iniciadoSesion = true;
        console.log('Inicio de sesión exitoso');
      } else {
        console.log('Contraseña incorrecta. Inténtalo de nuevo');
      }
    }
  
    cerrarSesion() {
      this.iniciadoSesion = false;
      console.log('Sesión cerrada');
    }
  
    verificarInformacionInicioSesion() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Correo electrónico: ${this.correoElectronico}`);
      console.log(`Contraseña: ${this.contrasena}`);
    }
  }  
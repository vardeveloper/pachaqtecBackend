class Usuario {
    constructor(nombre, correoElectronico, contraseña) {
      this.nombre = nombre;
      this.correoElectronico = correoElectronico;
      this.contraseña = contraseña;
      this.sesionIniciada = false;
    }
  
    iniciarSesion(correoElectronico, contraseña) {
      if (
        correoElectronico === this.correoElectronico &&
        contraseña === this.contraseña
      ) {
        this.sesionIniciada = true;
        console.log('Inicio de sesión exitoso.');
      } else {
        console.log("Credenciales inválidas. No se pudo iniciar sesión.");
      }
    }
  
    cerrarSesion() {
      this.sesionIniciada = false;
      console.log("Sesión cerrada.");
    }
  
    verificarSesion() {
      if (this.sesionIniciada) {
        console.log("El usuario " + this.nombre + " tiene la sesión iniciada.");
      } else {
        console.log("El usuario " + this.nombre + " no tiene la sesión iniciada.");
      }
    }
  }
  //Ejemplo
  const Usuario1 = new Usuario("Fabricio", "Fabricio@example.com", "BlackMarch31", "Iniciando")
  console.log(Usuario1.nombre())
  console.log(Usuario1.correoElectronico())
  let usuario = new Usuario("Fabricio", "Fabricio@example.com", "BlackMarch31");
  
  usuario.iniciarSesion("Fabricio@example.com", "BlackMarch31");
  usuario.verificarSesion(); 
  
  usuario.cerrarSesion(); 
  usuario.verificarSesion(); 
  
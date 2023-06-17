//3. Crear una clase "Usuario" con propiedades como nombre, dirección de correo electrónico y contraseña. Incluye métodos para iniciar sesión, cerrar sesión y verificar la información de inicio de sesión.

class Usuario{
    constructor(nombre,correo,password){
        this.nombre = nombre;
        this.correo = correo;
        this._password = password;
        this.login = false;
        this.logout = true
    }
    iniciarSesion(){
      this.login = true;
      this.logout = false
    }
    cerrarSesion(){
      this.login = false;
      this.logout = true
    }
    get estado(){
        if(this.login==false){
            return "Offline"
        }
        return "Online"
    }
    cambioDePassword(palabra){
        this._password = palabra
    }
}
module.exports = Usuario
const user1 = new Usuario("Jorge","askdasd@asdasd.com","asdasgasgasg")
user1.cambioDePassword("nuevaclave123")
console.log(user1)
console.log(user1.estado)
console.log("-------------")
user1.iniciarSesion()
console.log(user1.estado)
//console.log(user1)  
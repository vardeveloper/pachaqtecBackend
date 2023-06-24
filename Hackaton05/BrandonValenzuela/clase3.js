//Crear una clase "Usuario" con propiedades como nombre, 
//dirección de correo electrónico y contraseña. Incluye métodos para iniciar sesión, cerrar sesión y verificar la información de inicio de sesión.

const Producto = require("clase1");

class Usuario {
    contructor (nombre,correo,contraseña){
    this.nombre= nombre;
    this.correo = correo;
    this.contraseña = contraseña;
    this.login = false;
    }

    iniciarSesion(){
        console.log("Inicia Sesion")
        this.login = true
    }

    cerrarsesion(){
        console.log("Terminar Sesion")
        this.login = false

    }
    verficarInformacion(nombre,contraseña){
        if(this.nombre == nombre && this.contraseña ==contraseña){
            console.log("Información correcta");
        }
        else {console.log("Información incorrecta");}
    }


}

const usuario1 = new Usuario ("Martin","martin.loco@you.com",12563);
const usuario2 = new Usuario ("Oscar","Oscar.vito@you.com",20126);
const usuario3 = new Usuario ("Manuel","Manuel.sado@you.com",74521);
const usuario4 = new Usuario ("Mirian","Mirian.tosa@you.com",85693);
const usuario5 = new Usuario ("carlos","Carlos.Juno@you.com",78523);


usuario1.iniciarSesion();
console.log(usuario1.login)
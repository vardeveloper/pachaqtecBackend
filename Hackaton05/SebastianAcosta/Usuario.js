class Usuario{
    constructor (nombre,correo ,contraseña){
        this.nombre = nombre;
        this.correo = correo;
        this.contraseña = contraseña;
        this.sesion = false;
    }

    iniciarSesion(){
        this.sesion = true;
    }

    CerrarSesion(){
        this.sesion = false;
    }

    verficarInformacion(correo,contraseña){
        if(this.correo == correo && this.contraseña ==contraseña){
            console.log("Información correcta");
        }
        else {console.log("Información incorrecta");}
    }

}
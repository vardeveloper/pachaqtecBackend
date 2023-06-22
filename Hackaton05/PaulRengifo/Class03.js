class User{
    constructor(name, last_name, email, password){
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.is_logged = false
        this.last_login = NaN
        this.last_session_duration = NaN
    }

    login (){
        this.is_logged = true;
        this.last_login = new Date();
    }

    logout(){
        this.is_logged = false;
        let now = new Date();
        this.last_session_duration = now - this.last_login;
    }

    info (){
        let active = 'inactivo';
        if (this.is_logged){
            active = 'activo';
        }
        console.log(`El usuario ${this.name} esta ${active}`);
        console.log(`Ultima fecha de conexion ${this.last_login}`);
        console.log(`Duracion de ultima conexion ${this.last_session_duration / 1000} segundos`);
        
    }

}
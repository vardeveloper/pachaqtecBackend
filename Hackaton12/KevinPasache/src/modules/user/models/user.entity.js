class User {
    constructor(name,email,password){
        this.name = name;
        this.email = email;
        this.password = password;
        this.isLogged = false;
    }
    login(){
        document.write("Iniciaste sesión </br>")
        this.isLogged = true;
    }
    logout(){
        document.write("Cerraste sesión </br>")
        this.isLogged = false;
    }
}
class Usuario {
    constructor(id, nombre, edad, correo, contraseña) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.edad = edad
        this.contraseña = contraseña;
        this.isLogged = false;
    }

    iniciarSesion() {
        // Lógica para autenticar al usuario
        this.isLogged = true;
        console.log("Inicio de sesión exitoso");
    }

    cerrarSesion() {
        this.isLogged = false;
        console.log("Sesión cerrada");
    }
}

// Ejemplo de uso:
const usuario1 = new Usuario(1, "Juan", 23, "juan@example.com", "123456");
const usuario2 = new Usuario(2, "Pedro", 17, "pedro@example.com", "123456");
const usuario3 = new Usuario(3, "Jose", 22, "jose@example.com", "123456");
const usuario4 = new Usuario(4, "Mateo", 15, "mateo@example.com", "123456");
console.log(usuario1);
usuario1.iniciarSesion();
usuario1.cerrarSesion();


const usuarios = [usuario1, usuario2, usuario3];

// Agregar un objeto al arreglo:
usuarios.push(usuario4);
console.log(usuarios);


// Eliminar un objeto del array por índice:
const indiceEliminar = 1; // Eliminar el objeto en el índice 1
usuarios.splice(indiceEliminar, 1); // 1 (modifica / elimina) - 0 inserta
console.log(usuarios);


// Actualizar la propiedad "nombre" del objeto en el índice 0
const indiceActualizar = 0;
usuarios[indiceActualizar].nombre = "Juan Pablo";
console.log(usuarios);


// Filtrar objetos con edad mayor a 18
const resultadoFiltro = usuarios.filter(objeto => objeto.edad >= 18) ;
console.log(resultadoFiltro);


// Ordenar el array por la propiedad "edad" de forma ascendente
usuarios.sort((a, b) => a.edad - b.edad);
console.log(usuarios);

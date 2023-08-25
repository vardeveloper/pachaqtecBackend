/**
 * En este ejemplo, establecemos una cookie llamada nombre con el valor Juan. 
 * La cookie expirará el 21 de julio de 2023 a las 8:00 p.m. GMT. 
 * Luego, obtenemos el valor de la cookie y lo imprimimos en la consola. 
 * Por último, eliminamos la cookie.
 */

// Establecer una cookie
document.cookie = "nombre=Juan; expires=Thu, 21 Jul 2023 20:00:00 GMT; path=/;";

// Obtener una cookie
const nombre = document.cookie.split(";")[0].split("=")[1];
console.log(nombre); // Juan

// Eliminar una cookie
document.cookie = "nombre=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";

/**
 * Este ejemplo obtiene todas las cookies del navegador y las imprime en la consola.
 */

// Obtener todas las cookies
const cookies = document.cookie.split(";");

// Imprimir todas las cookies
cookies.forEach((cookie) => {
    const nombre = cookie.split("=")[0];
    const valor = cookie.split("=")[1];
    console.log(`Nombre: ${nombre}, Valor: ${valor}`);
});

//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//


// Establecer una Cookie:

function setCookie(name, value, days) {
    const expires = new Date();
    expires.setDate(expires.getDate() + days);
    const cookieValue = encodeURIComponent(value) + (days ? `; expires=${expires.toUTCString()}` : "");
    document.cookie = `${name}=${cookieValue}; path=/`;
}

setCookie("usuario", "juan", 7); // Establece una cookie "usuario" con valor "juan" que expira en 7 días

// Obtener el Valor de una Cookie:

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split("=");
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return "";
}

const usuario = getCookie("usuario");
console.log(usuario); // Imprime el valor de la cookie "usuario"

// Eliminar una Cookie:

function clearCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

clearCookie("usuario"); // Elimina la cookie "usuario"

/**
* Estos ejemplos utilizan funciones separadas para establecer, obtener y eliminar cookies. 
* La función setCookie establece una cookie con un nombre, un valor y una duración en días (si se proporciona). 
* La función getCookie obtiene el valor de una cookie por su nombre y la decodifica. 
* La función clearCookie elimina una cookie al establecer su fecha de vencimiento en el pasado.
*/
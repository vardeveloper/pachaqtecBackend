# SERVIDORES CON JAVASCRIPT

## 1. ECMASCRIPT Y TYPESCRIPT

### ECMAScript

ECMAScript es una especificación estándar de lenguaje de programación. Es el estándar en el que se basa JavaScript, lo que significa que JavaScript es una implementación concreta de la especificación ECMAScript. Esta especificación define la sintaxis, las características y las reglas que un lenguaje de programación debe seguir para que se le considere compatible con ECMAScript.

La necesidad de una especificación estandarizada surgió debido a la diversidad de implementaciones de JavaScript en diferentes navegadores y plataformas. ECMAScript se creó para establecer una base común para el lenguaje, lo que permite que los desarrolladores puedan escribir código que funcione en cualquier entorno que cumpla con el estándar ECMAScript.

La organización responsable de la especificación ECMAScript es Ecma International (anteriormente conocida como European Computer Manufacturers Association). La especificación ECMAScript se actualiza periódicamente para incluir nuevas características y mejoras al lenguaje.

Cada nueva versión de ECMAScript recibe un número, por ejemplo, ECMAScript 6 (también conocido como ECMAScript 2015) fue una importante actualización que introdujo muchas características nuevas, como las clases, arrow functions, let y const, entre otras.

JavaScript, al ser una implementación específica de ECMAScript, también se ha ido actualizando a lo largo del tiempo para ser compatible con las diferentes versiones de la especificación. Así, los desarrolladores pueden utilizar las nuevas características y mejoras que se agregan a ECMAScript en las versiones más recientes de JavaScript.

```javascript
// ECMAScript 2023 (ES14)

const arreglo = [1, 2, 3, 4, 5];

const reversedArray = arreglo.toReversed();
//reversedArray
//*arreglo

const splicedArray = arreglo.toSpliced(3, 2, 100, 400)
//splicedArray
//arreglo

const result = arreglo.with(1, 400)
//result
//arreglo

const arreglo_desordenado = [7, 6, 2, 1, 4, 3, 5, 11, 20];
const compare = (a, b) => a - b

const sortedArray = arreglo_desordenado.toSorted(compare);
sortedArray
arreglo_desordenado

//------------------------------------------------------------------//
//Symbols as WeakMap keys: Esta característica permite usar símbolos como claves en WeakMaps.

const weak = new WeakMap();
const key = Symbol("version");
const key2 = Symbol("objeto");
const objeto = {}

//weak.set(key, "ES2023");
//weak.set(key2, objeto);

//weak.get(key)
//weak.get(key2)

//------------------------------------------------------------------//
// Array find from last: Este método permite encontrar el último elemento en un array que cumpla con un predicado dado.

const array = [1, 2, 3, 4, 5];
const lastElement = array.findLast((element) => element % 2 === 0);
lastElement; // 4

// Array findLastIndex: Este método devuelve el índice del último elemento en un array que cumpla con un predicado dado.

//const array = [1, 2, 3, 4, 5];
const lastIndex = array.findLastIndex((element) => element % 2 === 0);
lastIndex; // 3
```

### Typescript

TypeScript es un lenguaje de programación de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, lo que significa que cualquier código JavaScript es también código válido en TypeScript. Sin embargo, TypeScript agrega características adicionales que lo convierten en un lenguaje de tipado estático, lo que lo hace más robusto y seguro para el desarrollo de aplicaciones a gran escala.

Las principales características de TypeScript son:

- Tipado estático: A diferencia de JavaScript, donde las variables pueden tener cualquier tipo de dato, en TypeScript se pueden definir tipos para las variables, parámetros de funciones, y el valor de retorno. Esto permite detectar errores en tiempo de compilación y ayuda a evitar muchos errores comunes durante el desarrollo.

```JavaScript
// Definimos el tipo de dato de las variables
let nombre: string = "Juan";
let edad: number = 30;
let esMayor: boolean = true;

// La siguiente línea dará un error en tiempo de compilación
edad = "treinta";
```

- Inferencia de tipos: TypeScript es inteligente en la inferencia de tipos, lo que significa que puede deducir automáticamente el tipo de una variable basándose en su valor inicial. Esto puede ahorrar tiempo y reducir la necesidad de especificar tipos en cada declaración de variable.

```JavaScript
// TypeScript infiere automáticamente el tipo de dato
let mensaje = "Hola, TypeScript"; // TypeScript deduce que 'mensaje' es de tipo 'string'

// La siguiente línea dará un error en tiempo de compilación
mensaje = 10; // Error: no se puede asignar un número a una variable de tipo 'string'
```

- Interfaces y clases: TypeScript soporta la definición de interfaces y clases, lo que facilita la aplicación de patrones de programación orientada a objetos y la estructuración del código de manera más organizada.

```JavaScript
// Definimos una interfaz para representar un objeto "Persona"
interface Persona {
    nombre: string;
    edad: number;
}

// Creamos una clase que implementa la interfaz "Persona"
class Estudiante implements Persona {
    constructor(public nombre: string, public edad: number) {}
}

// Creamos una instancia de la clase Estudiante
const estudiante1 = new Estudiante("María", 25);

console.log(estudiante1.nombre); // Imprime "María"
console.log(estudiante1.edad);   // Imprime 25
```

- Decoradores: TypeScript permite el uso de decoradores, que son una característica experimental que permite modificar clases y sus métodos de forma declarativa. Esto se utiliza comúnmente en el desarrollo de aplicaciones con frameworks como Angular.

```JavaScript
// Definimos un decorador personalizado para modificar un método
function logTime(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
    console.log(`Método ${key} invocado.`);
    const result = originalMethod.apply(this, args);
    console.log(`Método ${key} finalizado.`);
    return result;
    };
    return descriptor;
}

class MiClase {
    @logTime
    saludar(nombre: string) {
    console.log(`Hola, ${nombre}!`);
    }
}

const objeto = new MiClase();
objeto.saludar("Ana"); // Imprime el mensaje de saludo y los logs del decorador
```

- Enumeraciones: TypeScript ofrece soporte para enumeraciones, lo que permite definir un conjunto de constantes nombradas con valores asociados.

```JavaScript
// Definimos una enumeración para días de la semana
enum DiasSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

// Podemos usar la enumeración para representar un día de la semana
let diaHoy: DiasSemana = DiasSemana.Miercoles;
console.log(diaHoy); // Imprime 2 (los valores comienzan desde 0)
console.log(DiasSemana[diaHoy]); // Imprime "Miércoles"
```

Para trabajar con TypeScript, se debe compilar el código TypeScript a JavaScript, ya que los navegadores y entornos de ejecución solo entienden JavaScript. La compilación de TypeScript se realiza a través del compilador de TypeScript (tsc) que traduce el código TypeScript a código JavaScript válido.

TypeScript se ha vuelto cada vez más popular en el desarrollo de aplicaciones web y Node.js, especialmente para proyectos grandes y complejos. Al agregar características de tipado estático y un conjunto de herramientas de desarrollo más sólidas, TypeScript mejora la productividad y la calidad del código en comparación con JavaScript puro.

### Programación Sincrónica vs Asincrónica

La programación síncrona y asincrónica son dos enfoques para manejar el flujo de ejecución de un programa, especialmente cuando se trata de operaciones que pueden tomar tiempo, como lecturas de archivos, solicitudes de red o llamadas a bases de datos.

#### Programación Sincrónica

En la programación síncrona, las tareas se ejecutan en secuencia, una después de la otra. Cada tarea espera a que la anterior se complete antes de comenzar su ejecución. Esto significa que el programa espera a que una tarea termine antes de continuar con la siguiente. Si alguna tarea toma mucho tiempo en completarse, puede bloquear todo el programa y hacer que este sea menos eficiente.

```javascript
console.log('Inicio del programa');

// Tarea 1
console.log('Tarea 1: Realizando operación...');
// ... Tarea 1 puede tomar algún tiempo

// Tarea 2
console.log('Tarea 2: Realizando operación...');
// ... Tarea 2 puede tomar algún tiempo

console.log('Fin del programa');

```

En este ejemplo, cada tarea espera a que la anterior termine antes de comenzar. Si alguna tarea toma tiempo, el programa se bloquea hasta que todas las tareas finalicen.

#### Programación Asincrónica

En la programación asincrónica, las tareas se ejecutan de manera concurrente, lo que significa que no esperan a que una tarea termine para comenzar otra. En lugar de bloquear el flujo del programa, las operaciones asincrónicas se inician y el programa continúa con otras tareas mientras espera que estas operaciones se completen. Cuando una operación asincrónica termina, se ejecuta un callback o se resuelve una promesa para manejar el resultado.

```javascript
console.log('Inicio del programa');

// Tarea 1 - Operación asincrónica con callback
console.log('Tarea 1: Iniciando operación...');
setTimeout(function() {
  console.log('Tarea 1: Operación completada.');
}, 5000); // Esperamos 2 segundos

// Tarea 2 - Operación asincrónica con callback
console.log('Tarea 2: Iniciando operación...');
setTimeout(function() {
  console.log('Tarea 2: Operación completada.');
}, 1000); // Esperamos 1 segundo

console.log('Fin del programa');

```

En este ejemplo, las tareas asincrónicas no bloquean el flujo del programa y se ejecutan de manera concurrente. El programa continúa con otras tareas mientras espera que las operaciones asincrónicas terminen. Cuando una tarea asincrónica termina, se ejecuta el callback asociado.

La programación asincrónica es especialmente útil en situaciones en las que las operaciones pueden llevar tiempo, ya que permite que el programa sea más eficiente y responda a eventos y solicitudes externas sin bloquear la ejecución. Para manejar de manera más clara y estructurada el flujo asincrónico, se pueden utilizar promesas o async/await, que son características más modernas de JavaScript y facilitan la gestión de tareas asíncronas.

## 2. MANEJO DE ARCHIVOS

### Callbacks

Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan después de que se complete cierta tarea o proceso. En esencia, un callback es una manera de asegurar que cierto código no se ejecute hasta que otro proceso haya terminado.

En JavaScript, los callbacks son muy comunes y se utilizan ampliamente para manejar operaciones asíncronas, como lecturas de archivos, llamadas a APIs, eventos de tiempo (setTimeout, setInterval), entre otras.

#### Ejemplo de callback con función anónima

```javascript
// Función que toma un número y un callback, y llama al callback con el número multiplicado por 2.
function multiplicarPorDos(num, callback) {
  const resultado = num * 2;
  callback(resultado);
}

// Uso del callback con una función anónima
multiplicarPorDos(5, function (resultado) {
  console.log(resultado); // Imprime 10
});
```

#### Ejemplo de callback con función nombrada

```javascript
// Función que simula una operación asincrónica (setTimeout)
function operacionAsincronica(callback) {
  setTimeout(function () {
    console.log("Operación asincrónica completada.");
    callback();
  }, 2000); // Simulamos un retardo de 2 segundos antes de llamar al callback
}

// Uso del callback con una función nombrada
function callbackEjecutado() {
  console.log("El callback fue ejecutado después de la operación asincrónica.");
}

operacionAsincronica(callbackEjecutado);
```

#### Ejemplo de callback con error

```javascript
// Función que realiza una operación y llama al callback con un error o un resultado.
function operacionConError(callback) {
  const error = false; // Cambiar a true para simular un error

  if (error) {
    callback("Ocurrió un error en la operación.");
  } else {
    callback(null, "Operación exitosa.");
  }
}

// Uso del callback con manejo de errores
operacionConError(function (error, resultado) {
  if (error) {
    console.error(error); // Imprime el mensaje de error
  } else {
    console.log(resultado); // Imprime "Operación exitosa."
  }
});
```

Estos ejemplos muestran cómo los callbacks permiten manejar tareas asíncronas o controlar el flujo del programa después de que se haya completado una operación. Es importante tener en cuenta que el uso excesivo de callbacks anidados puede llevar a un patrón conocido como "Callback Hell" (Infierno de Callbacks), lo cual dificulta la legibilidad y el mantenimiento del código. Para evitar este problema, se pueden utilizar otras técnicas como Promises o async/await.

### Promesas

Las promesas son objetos que representan la eventual finalización o el fracaso de una operación asíncrona y permiten trabajar de manera más elegante y estructurada con código asincrónico en JavaScript. Proporcionan una interfaz más clara para manejar tareas asíncronas y evitan el problema del "Callback Hell" al permitir encadenar operaciones de manera más legible.

Una promesa puede tener tres estados posibles:

- **Pending (Pendiente):** La promesa está en curso y aún no se ha resuelto o rechazado.
- **Resolved (Resuelto):** La promesa se ha resuelto exitosamente.
- **Rejected (Rechazado):** La promesa ha sido rechazada debido a un error.

#### Ejemplo de promesa básica

```javascript
// Función que retorna una promesa que se resuelve después de 2 segundos
function esperarDosSegundos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Operación exitosa después de 2 segundos.");
    }, 2000);
  });
}

// Uso de la promesa
esperarDosSegundos()
  .then((resultado) => {
    console.log(resultado); // Imprime "Operación exitosa después de 2 segundos."
  })
  .catch((error) => {
    console.error(error); // No se ejecutará en este ejemplo, ya que la promesa nunca es rechazada.
  });
```

#### Ejemplo de manejo de errores con promesas

```javascript
// Función que retorna una promesa que se rechaza con un error después de 1 segundo
function operacionConError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Ocurrió un error en la operación.");
    }, 1000);
  });
}

// Uso de la promesa con manejo de errores
operacionConError()
  .then((resultado) => {
    console.log(resultado); // No se ejecutará en este ejemplo, ya que la promesa es rechazada.
  })
  .catch((error) => {
    console.error(error); // Imprime "Ocurrió un error en la operación."
  });
```

#### Ejemplo de encadenamiento de promesas

```javascript
// Función que retorna una promesa que se resuelve después de 1 segundo con un valor numérico
function obtenerNumero() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

// Función que toma un número y retorna una promesa que se resuelve con el número multiplicado por 2
function multiplicarPorDos(num) {
  return new Promise((resolve, reject) => {
    resolve(num * 2);
  });
}

// Uso del encadenamiento de promesas
obtenerNumero()
  .then((numero) => {
    return multiplicarPorDos(numero); // Encadenamos otra promesa
  })
  .then((resultado) => {
    console.log(resultado); // Imprime 20 (10 multiplicado por 2)
  })
  .catch((error) => {
    console.error(error); // No se ejecutará en este ejemplo, ya que las promesas no son rechazadas.
  });
```

Las promesas facilitan el manejo de operaciones asíncronas y permiten un código más estructurado y claro en comparación con los callbacks anidados. Sin embargo, a medida que el código asincrónico se vuelve más complejo, pueden surgir situaciones en las que las promesas también pueden volverse difíciles de manejar. Es aquí donde las características adicionales de ECMAScript 2017, como async/await, pueden resultar útiles para simplificar aún más el manejo de tareas asíncronas.

### async/await

Async y await son características que facilitan el manejo de código asincrónico de manera más similar a código síncrono, lo que mejora la legibilidad y el flujo del programa.

Supongamos que tenemos una función asincrónica llamada obtenerDatosUsuario que simula una solicitud a una API para obtener los datos de un usuario:

```javascript
// Función simulada que devuelve datos del usuario después de una solicitud asincrónica
function obtenerDatosUsuario() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, nombre: 'Juan', edad: 30 });
    }, 1000); // Simulamos un retardo de 1 segundo
  });
}
```

Ahora, utilizaremos async y await para obtener los datos del usuario de manera más limpia y legible:

```javascript
async function obtenerDatosDelUsuarioAsync() {
  try {
    console.log('Iniciando la solicitud...');
    const datosUsuario = await obtenerDatosUsuario();
    console.log('Datos del usuario:', datosUsuario);
    return datosUsuario;
  } catch (error) {
    console.error('Error al obtener los datos del usuario:', error);
    return null;
  }
}

// Llamada a la función asincrónica con await
async function miFuncionPrincipal() {
  try {
    const datos = await obtenerDatosDelUsuarioAsync();
    console.log('Función principal - Datos del usuario:', datos);
  } catch (error) {
    console.error('Función principal - Error:', error);
  }
}

miFuncionPrincipal();
```

En este ejemplo, definimos dos funciones asincrónicas: obtenerDatosDelUsuarioAsync y miFuncionPrincipal. La primera función, obtenerDatosDelUsuarioAsync, utiliza async para indicar que contiene operaciones asincrónicas, y dentro de ella, utilizamos await para esperar a que se resuelva la promesa de la función obtenerDatosUsuario y obtener los datos del usuario. El uso de await permite que la ejecución se detenga hasta que la promesa se resuelva, lo que da como resultado un código más fácil de leer y entender.

La segunda función, miFuncionPrincipal, simplemente llama a obtenerDatosDelUsuarioAsync y maneja posibles errores utilizando bloques try y catch. Esto nos permite manejar de manera más limpia los resultados y errores de las operaciones asincrónicas.

Recuerda que el uso de async y await es especialmente útil cuando necesitas manejar múltiples operaciones asincrónicas de forma más secuencial y legible, evitando el "Callback Hell" y mejorando la organización del código.

### Manejo de archivos con NodeJS

Utilizaremos el módulo fs (file system) de Node.js, que proporciona funciones para interactuar con el sistema de archivos del sistema operativo.

Para comenzar, asegúrate de tener Node.js instalado en tu sistema. Luego, crea un archivo app.js en el directorio de trabajo y sigue estos pasos:

#### Leer contenido de un archivo

```javascript
const fs = require('fs');

// Leemos el contenido de un archivo de texto llamado 'archivo.txt'
fs.readFile('archivo.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
  } else {
    console.log('Contenido del archivo:', data);
  }
});

```

#### Escribir contenido en un archivo

```javascript
const fs = require('fs');

// Creamos o sobrescribimos el contenido de un archivo llamado 'archivo.txt'
const contenido = 'Hola, este es el contenido que se escribirá en el archivo.';
fs.writeFile('archivo.txt', contenido, (err) => {
  if (err) {
    console.error('Error al escribir en el archivo:', err);
  } else {
    console.log('Se escribió el contenido en el archivo.');
  }
});

```

#### Agregar contenido a un archivo existente

```javascript
const fs = require('fs');

// Agregamos contenido a un archivo llamado 'archivo.txt' sin borrar el contenido previo
const contenido = '\nEste contenido se agrega al final del archivo.';
fs.appendFile('archivo.txt', contenido, (err) => {
  if (err) {
    console.error('Error al agregar contenido al archivo:', err);
  } else {
    console.log('Se agregó el contenido al archivo.');
  }
});

```

Recuerda que estas operaciones son asíncronas, por lo que es importante manejar los posibles errores y asegurarte de que las operaciones se completen correctamente. Si prefieres realizar operaciones síncronas, también existen funciones en el módulo fs para ello, pero ten en cuenta que esto podría bloquear la ejecución del programa hasta que la operación se complete.

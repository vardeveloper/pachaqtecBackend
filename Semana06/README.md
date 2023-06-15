# DOM

## Local Storage vs Session Storage

| Características  | Local Storage         | Session Storage       |
| ---------------- | --------------------- | --------------------- |
| Ámbito           | Dominio completo      | Pestaña o ventana     |
|                  |                       | específica            |
|                  |                       |                       |
| Duración de datos| Persisten después de  | Se eliminan al cerrar |
|                  | cerrar y reabrir el   | la pestaña o ventana  |
|                  | navegador             |                       |
|                  |                       |                       |
| Acceso a datos   | Disponible en todas   | Disponible solo en    |
|                  | las ventanas y        | la pestaña o ventana  |
|                  | pestañas del dominio  | actual                |
|                  |                       |                       |
| Capacidad de     | Mayor (varios         | Menor (generalmente   |
| almacenamiento   | megabytes)            | unos pocos megabytes) |

## Local Storage & Session Storage

En JavaScript, tanto el Local Storage como el Session Storage son mecanismos de almacenamiento en el lado del cliente que permiten a las aplicaciones web guardar datos de forma persistente en el navegador. Sin embargo, existen algunas diferencias clave entre ellos:

* **Ámbito de almacenamiento:** El Local Storage tiene un alcance más amplio y los datos almacenados en él persisten incluso después de cerrar y volver a abrir el navegador. Los datos del Local Storage están disponibles en todas las ventanas y pestañas del mismo dominio. Por otro lado, el Session Storage tiene un alcance más limitado y los datos almacenados en él se borran cuando se cierra la pestaña o ventana actual. Los datos del Session Storage solo están disponibles para la pestaña o ventana específica que los creó.

* **Duración de los datos:** Los datos del Local Storage son persistentes y no tienen una fecha de vencimiento predeterminada. Permanecen almacenados en el navegador hasta que se borren explícitamente o se eliminen mediante código. En cambio, los datos del Session Storage son válidos solo durante la duración de la sesión actual del navegador. Cuando se cierra la pestaña o ventana, los datos del Session Storage se eliminan automáticamente.

* **Acceso a los datos:** Tanto el Local Storage como el Session Storage permiten acceder y modificar los datos mediante la API de almacenamiento web proporcionada por JavaScript. Ambos utilizan una interfaz similar, que incluye métodos como setItem(), getItem(), removeItem() y clear() para administrar los datos almacenados.

* **Capacidad de almacenamiento:** La capacidad de almacenamiento puede variar entre el Local Storage y el Session Storage, pero generalmente es mayor en el Local Storage. Por lo general, se permite almacenar varios megabytes de datos en el Local Storage, mientras que el Session Storage puede tener una capacidad menor, a menudo limitada a unos pocos megabytes.

En resumen, el Local Storage es útil para almacenar datos que deben persistir a lo largo del tiempo, mientras que el Session Storage es adecuado para almacenar datos temporales que solo son relevantes durante una sesión específica. La elección entre uno u otro depende de las necesidades específicas de tu aplicación y la duración deseada de los datos almacenados.

## ¿Qué es el DOM?

El DOM (Document Object Model) es una representación en forma de árbol de la estructura de un documento HTML o XML. Proporciona una interfaz de programación para acceder y manipular los elementos y contenido de un documento web.

El DOM permite a los programadores acceder y modificar los elementos HTML, estilos, clases, atributos y contenido de una página web mediante lenguajes de programación como JavaScript. Cada elemento en el documento se representa como un nodo en el árbol del DOM, y se puede acceder a ellos utilizando métodos y propiedades proporcionadas por el DOM.

El uso principal del DOM es permitir la interactividad y la manipulación dinámica de los elementos de una página web. Al utilizar JavaScript y el DOM, los desarrolladores pueden cambiar la estructura, los estilos y el contenido de una página web en respuesta a eventos o acciones del usuario.

Algunos ejemplos comunes de uso del DOM son:

* **Manipulación del contenido:** Agregar, eliminar o modificar elementos y texto en una página web.
* **Cambio de estilos:** Modificar las propiedades CSS de los elementos para cambiar su apariencia.
* **Manipulación de formularios:** Validar datos, enviar formularios y realizar acciones en función de las entradas del usuario.
* **Manipulación de eventos:** Responder a eventos del usuario, como clics, desplazamientos o cambios en el teclado.
* **Animaciones:** Crear efectos y animaciones en los elementos de la página.
* **Comunicación con el servidor:** Realizar solicitudes AJAX para obtener o enviar datos al servidor sin necesidad de recargar la página completa.

En resumen, el DOM es una representación estructurada de un documento web que permite la interacción y manipulación dinámica de los elementos de la página utilizando JavaScript u otros lenguajes de programación.

## Estructura del árbol del DOM

    html
    ├── head
    │   └── title
    └── body
        ├── header
        │   ├── h1
        │   └── nav
        │       └── ul
        │           ├── li
        │           │   └── a
        │           ├── li
        │           │   └── a
        │           └── li
        │               └── a
        ├── main
        │   ├── section
        │   │   ├── h2
        │   │   └── p
        │   └── section
        │       ├── h2
        │       └── p
        └── footer
            └── p

Este cuadro representa la jerarquía de los elementos en la estructura del árbol del DOM. Cada elemento se muestra como un nodo y los nodos hijos se indentan debajo de sus nodos padres. Esto te permite visualizar cómo se organizan y conectan los elementos en la página web.

## ¿Qué son los eventos, para qué sirven y cuáles son los mas comunes?

En el contexto de la programación web, los eventos son acciones o sucesos que ocurren en el navegador y que pueden ser detectados y manejados por el código JavaScript. Los eventos permiten que una página web responda a las interacciones del usuario, como hacer clic en un elemento, mover el ratón, escribir en un campo de texto, cargar la página, entre otros.

Los eventos son fundamentales para hacer que una página web sea interactiva y dinámica. Al detectar y manejar eventos, puedes ejecutar código JavaScript en respuesta a esas acciones, lo que te permite realizar cambios en la página, realizar validaciones, enviar solicitudes al servidor, actualizar elementos, entre otras acciones.

Algunos de los eventos más comunes en programación web son:

* **Clic (click):** Se dispara cuando se hace clic en un elemento.
* **Cambio (change):** Se dispara cuando cambia el valor de un elemento, como un campo de entrada o un menú desplegable.
* **Envío de formulario (submit):** Se dispara cuando se envía un formulario.
* **Carga (load):** Se dispara cuando la página web o un recurso se ha cargado completamente.
* **Teclado (keydown, keyup, keypress):** Se disparan cuando se presiona o se suelta una tecla en el teclado.
* **Desplazamiento (scroll):** Se dispara cuando se desplaza la página hacia arriba o hacia abajo.
* **Enfoque (focus):** Se dispara cuando un elemento recibe el enfoque, como un campo de entrada.
* **Pérdida de enfoque (blur):** Se dispara cuando un elemento pierde el enfoque.

Estos son solo algunos ejemplos de eventos comunes, pero existen muchos más eventos disponibles que se pueden utilizar según las necesidades de interacción y comportamiento que desees implementar en tu página web.

## ¿Cómo se escucha un evento sobre el DOM?

Para escuchar un evento sobre el DOM y ejecutar código en respuesta a dicho evento, se utiliza JavaScript. A través del uso de métodos y funciones, puedes registrar "event listeners" (o "escuchadores de eventos") que estarán pendientes de la ocurrencia de un evento específico y ejecutarán una función cuando se produzca ese evento.

Aquí tienes un ejemplo básico de cómo se puede escuchar un evento clic en un botón y ejecutar una función en respuesta:

**HTML:**

```html
<button id="miBoton">Haz clic</button>
```

**JavaScript:**

```javascript
// Obtener una referencia al botón por su ID
const boton = document.getElementById('miBoton');

// Registrar el evento clic y especificar la función a ejecutar
boton.addEventListener('click', function() {
    console.log('¡Se hizo clic en el botón!');
});
```

En este ejemplo, el método addEventListener se utiliza para escuchar el evento clic en el botón identificado por su ID "miBoton". La función pasada como argumento se ejecutará cada vez que se haga clic en el botón. En este caso, simplemente se muestra un mensaje en la consola utilizando console.log(), pero puedes realizar cualquier acción o manipulación del DOM dentro de esa función.

Este es solo un ejemplo básico, pero puedes escuchar otros eventos como "change", "submit", "keydown", entre otros. También puedes utilizar selectores de CSS en lugar de IDs para obtener referencias a los elementos sobre los que deseas escuchar eventos.

Recuerda que el código JavaScript que agrega los event listeners debe ejecutarse después de que el DOM haya cargado, para asegurarse de que los elementos estén disponibles. Puedes hacer esto colocando tu código JavaScript al final del cuerpo del documento o utilizando el evento "DOMContentLoaded" para esperar a que el DOM esté listo antes de agregar los event listeners.

## Ejemplos de los eventos mas comunes en javascript

* Evento clic (click):

```html
<button id="myButton">Haz clic aquí</button>

<script>
    const button = document.getElementById('myButton');
    button.addEventListener('click', function() {
        console.log('Se hizo clic en el botón');
    });
</script>
```

* Evento cambio (change):

```html
<input type="text" id="myInput">

<script>
    const input = document.getElementById('myInput');
    input.addEventListener('change', function(event) {
        const valor = event.target.value;
        console.log('El valor ha cambiado:', valor);
    });
</script>
```

* Evento envío de formulario (submit):

```html
<form id="myForm">
    <input type="text" name="nombre" placeholder="Nombre">
    <button type="submit">Enviar</button>
</form>

<script>
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que se envíe el formulario por defecto
        console.log('Formulario enviado');
        // Aquí puedes realizar acciones adicionales, como enviar datos al servidor
    });
</script>
```

* Evento carga (load):

```javascript
window.addEventListener('load', function() {
    console.log('La página se ha cargado completamente');
});
```

* Eventos de teclado (keydown, keyup, keypress):

```html
<input type="text" id="myInput">

<script>
    const input = document.getElementById('myInput');
    
    input.addEventListener('keydown', function(event) {
        console.log('Se presionó una tecla');
        console.log('Código de tecla:', event.keyCode);
    });
    
    input.addEventListener('keyup', function(event) {
        console.log('Se soltó una tecla');
    });
    
    input.addEventListener('keypress', function(event) {
        console.log('Se mantuvo presionada una tecla');
        console.log('Carácter ingresado:', event.key);
    });
</script>
```

* Evento desplazamiento (scroll):

```html
<script>
    window.addEventListener('scroll', function() {
        console.log('Se ha realizado un desplazamiento');
    });
</script>
```

* Eventos de enfoque (focus, blur):

```html
<input type="text" id="myInput">

<script>
    const input = document.getElementById('myInput');
    
    input.addEventListener('focus', function() {
        console.log('El campo de entrada ha obtenido el enfoque');
    });
    
    input.addEventListener('blur', function() {
        console.log('El campo de entrada ha perdido el enfoque');
    });
</script>
```

## Ejemplos de uso se electores

* **Seleccionar por ID (getElementById):** Selecciona un elemento del DOM utilizando su atributo id.

```html
<div id="miDiv">Contenido del div</div>

<script>
  const div = document.getElementById('miDiv');
  console.log(div.textContent);
</script>
```

* **Seleccionar por clase (getElementsByClassName):** Selecciona todos los elementos del DOM que tienen una clase específica.

```html
<ul>
  <li class="item">Item 1</li>
  <li class="item">Item 2</li>
  <li class="item">Item 3</li>
</ul>

<script>
  const items = document.getElementsByClassName('item');
  for (let i = 0; i < items.length; i++) {
    console.log(items[i].textContent);
  }
</script>
```

* **Seleccionar por etiqueta (getElementsByTagName):** Selecciona todos los elementos del DOM que tienen una etiqueta específica.

```html
<p>Primer párrafo</p>
<p>Segundo párrafo</p>
<p>Tercer párrafo</p>

<script>
  const parrafos = document.getElementsByTagName('p');
  for (let i = 0; i < parrafos.length; i++) {
    console.log(parrafos[i].textContent);
  }
</script>
```

* **Seleccionar por selector CSS (querySelector):** Selecciona el primer elemento del DOM que coincide con un selector CSS específico.

```html
<div class="contenedor">
  <h1>Título</h1>
  <p>Contenido del párrafo</p>
</div>

<script>
  const titulo = document.querySelector('.contenedor h1');
  console.log(titulo.textContent);
  
  const parrafo = document.querySelector('.contenedor p');
  console.log(parrafo.textContent);
</script>
```

* **Selector de selectores CSS (querySelectorAll):** Selecciona todos los elementos del DOM que coinciden con un selector CSS específico y devuelve una lista de nodos.

```html
<ul>
  <li class="item">Item 1</li>
  <li class="item">Item 2</li>
  <li class="item">Item 3</li>
</ul>

<script>
  const items = document.querySelectorAll('.item');
  items.forEach(function(item) {
    console.log(item.textContent);
  });
</script>
```

## Ejemplos de cómo agregar elementos al DOM

* **Agregar un elemento al final de un elemento padre (appendChild):**

```html
<ul id="myList">
  <li>Elemento 1</li>
  <li>Elemento 2</li>
</ul>

<script>
  const myList = document.getElementById('myList');
  const newElement = document.createElement('li');
  newElement.textContent = 'Elemento 3';
  myList.appendChild(newElement);
</script>
```

* **Agregar un elemento antes de otro elemento (insertBefore):**

```html
<ul id="myList">
  <li>Elemento 1</li>
  <li>Elemento 3</li>
</ul>

<script>
  const myList = document.getElementById('myList');
  const newElement = document.createElement('li');
  newElement.textContent = 'Elemento 2';
  const referenceElement = myList.querySelector('li:nth-child(2)');
  myList.insertBefore(newElement, referenceElement);
</script>
```

* **Agregar un elemento como el primer hijo de un elemento padre (prepend):**

```html
<div id="myDiv">
  <p>Contenido existente</p>
</div>

<script>
  const myDiv = document.getElementById('myDiv');
  const newElement = document.createElement('h1');
  newElement.textContent = 'Título';
  myDiv.prepend(newElement);
</script>
```

* **Reemplazar un elemento existente (replaceWith):**

```html
<div id="myDiv">
  <p>Contenido antiguo</p>
</div>

<script>
  const myDiv = document.getElementById('myDiv');
  const newElement = document.createElement('p');
  newElement.textContent = 'Contenido nuevo';
  myDiv.replaceWith(newElement);
</script>
```

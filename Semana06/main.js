/**
 ******************************************************************************
 * local storage vs session storage
 ******************************************************************************
 */

// Crear un par key/value
localStorage.setItem('fullName', 'Víctor Alcántara');

// Retorna el valor asociado a la clave. 
// Devuelve nulo si la clave no existe
console.log(localStorage.getItem('fullName'));  // Víctor Alcántara

// Remueve el par clave/valor
//localStorage.removeItem('name');

// Remueve todos los pares clave/valor
//localStorage.clear();



/**
 ******************************************************************************
 * Evento clic (click):
 * Se dispara cuando se hace clic en un elemento.
 ******************************************************************************
 */
// Obtener una referencia al botón por su ID
const boton = document.getElementById('miBoton');

// Registrar el evento clic y especificar la función a ejecutar
boton.addEventListener('click', function () {
  console.log('¡Se hizo clic en el botón!');
});



/**
 ******************************************************************************
 * Evento cambio (change):
 * Se dispara cuando cambia el valor de un elemento, como un campo de entrada 
 * o un menú desplegable.
 ******************************************************************************
 */

const input = document.getElementById('myInput');

input.addEventListener('change', function (event) {
  const valor = event.target.value;
  console.log('El valor ha cambiado:', valor);
});



/**
 ******************************************************************************
 * Evento envío de formulario (submit):
 * Se dispara cuando se envía un formulario.
 ******************************************************************************
 */

const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita que se envíe el formulario por defecto
  console.log('Formulario enviado');
  // Aquí puedes realizar acciones adicionales, como enviar datos al servidor
});



/**
 ******************************************************************************
 * Evento carga (load):
 * Se dispara cuando la página web o un recurso se ha cargado completamente.
 ******************************************************************************
 */

window.addEventListener('load', function () {
  console.log('La página se ha cargado completamente');
});



/**
 ******************************************************************************
 * Eventos de teclado (keydown, keyup, keypress):
 * Se disparan cuando se presiona o se suelta una tecla en el teclado.
 ******************************************************************************
 */

const input2 = document.getElementById('myInput2');

input2.addEventListener('keydown', (event) => {
  console.log('Se presionó una tecla');
  console.log('Código de tecla:', event.code);
});

input2.addEventListener('keyup', () => {
  console.log('Se soltó una tecla');
});

input2.addEventListener('keypress', (event) => {
  console.log('Se mantuvo presionada una tecla');
  console.log('Carácter ingresado:', event.key);
});



/**
 ******************************************************************************
 * Evento desplazamiento (scroll):
 * Se dispara cuando se desplaza la página hacia arriba o hacia abajo.
 ******************************************************************************
 */

window.addEventListener('scroll', function () {
  console.log('Se ha realizado un desplazamiento');
});



/**
 ******************************************************************************
 * Eventos de enfoque (focus, blur):
 * focus: Se dispara cuando un elemento recibe el enfoque, como un campo de entrada.
 * blur: Se dispara cuando un elemento pierde el enfoque.
 ******************************************************************************
 */

const input3 = document.getElementById('myInput3');

input3.addEventListener('focus', function () {
  console.log('El campo de entrada ha obtenido el enfoque');
});

input3.addEventListener('blur', function () {
  console.log('El campo de entrada ha perdido el enfoque');
});






/**
 ******************************************************************************
 * Seleccionar por ID:
 * Selecciona un elemento del DOM utilizando su atributo id.
 ******************************************************************************
 */

const div = document.getElementById('miDiv');
console.log(div.textContent);



/**
 ******************************************************************************
 * Seleccionar por clase:
 * Selecciona todos los elementos del DOM que tienen una clase específica.
 ******************************************************************************
 */

const items = document.getElementsByClassName('item');

for (let i = 0; i < items.length; i++) {
  console.log(items[i].textContent);
}



/**
 ******************************************************************************
 * Seleccionar por etiqueta:
 * Selecciona todos los elementos del DOM que tienen una etiqueta específica.
 ******************************************************************************
 */

const parrafos = document.getElementsByTagName('p');

for (let i = 0; i < parrafos.length; i++) {
  console.log(parrafos[i].textContent);
}



/**
 ******************************************************************************
 * Seleccionar por selector CSS:
 * Selecciona el primer elemento del DOM que coincide con un selector CSS 
 ******************************************************************************
 */

const titulo = document.querySelector('.container h2');
console.log(titulo.textContent);

const parrafo = document.querySelector('.container p');
console.log(parrafo.textContent);



/**
 ******************************************************************************
 * Selector de selectores CSS (querySelectorAll):
 * Selecciona todos los elementos del DOM que coinciden con un selector CSS 
 * específico y devuelve una lista de nodos.
 ******************************************************************************
 */

const items2 = document.querySelectorAll('.item');

items2.forEach(function (item) {
  console.log(item.textContent);
});










/**
 ******************************************************************************
 * Agregar un elemento al final de un elemento padre (appendChild):
 ******************************************************************************
 */

const myList = document.getElementById('myList');
const newElement = document.createElement('li');
newElement.textContent = 'Elemento 3';
myList.appendChild(newElement);



/**
 ******************************************************************************
 * Agregar un elemento antes de otro elemento (insertBefore):
 ******************************************************************************
 */

const myList2 = document.getElementById('myList2');
const newElement2 = document.createElement('li');
newElement2.textContent = 'Elemento 2';
const referenceElement = myList2.querySelector('li:nth-child(2)');
myList2.insertBefore(newElement2, referenceElement);



/**
******************************************************************************
* Agregar un elemento como el primer hijo de un elemento padre (prepend):
******************************************************************************
*/

const myDiv = document.getElementById('myDiv');
const newElement3 = document.createElement('h1');
newElement3.textContent = 'Título';
myDiv.prepend(newElement3);



/**
******************************************************************************
* Reemplazar un elemento existente (replaceWith):
******************************************************************************
*/

//const myDiv = document.getElementById('myDiv');
const newElement4 = document.createElement('p');
newElement4.textContent = 'Contenido nuevo';
//myDiv.replaceWith(newElement4);

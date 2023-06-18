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

const boton2 = document.getElementById('miBoton2');

// Registrar el evento clic y especificar la función a ejecutar
boton2.addEventListener('mouseover', function () {
  boton2.style.backgroundColor = "red";
});

boton2.addEventListener('mouseout', function () {
    boton2.style.backgroundColor = "blue";
  });

const enlace = document.getElementById('enlace');
enlace.addEventListener('click', function () {
    enlace.style.color= "red";
  });



/**
 ******************************************************************************
 * Evento cambio (change):
 * Se dispara cuando cambia el valor de un elemento, como un campo de entrada 
 * o un menú desplegable.
 ******************************************************************************
 */

/*const input = document.getElementById('myInput');

input.addEventListener('change', function (event) {
  const valor = event.target.value;
  console.log('El valor ha cambiado:', valor);
});*/



/**
 ******************************************************************************
 * Evento envío de formulario (submit):
 * Se dispara cuando se envía un formulario.
 ******************************************************************************
 */

const form = document.getElementById('myForm');
const input1 = document.getElementById('myInput1');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita que se envíe el formulario por defecto
  console.log(input1.value);
  // Aquí puedes realizar acciones adicionales, como enviar datos al servidor
});

const form2 = document.getElementById('myForm2');
const select1 = document.getElementById('lang');
form2.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita que se envíe el formulario por defecto
  
  console.log(select1.value);
  // Aquí puedes realizar acciones adicionales, como enviar datos al servidor
});



/**
 ******************************************************************************
 * Imagen del dinosaurio
 ******************************************************************************
 */

 const imagen1 = document.getElementById('imagen1');

 imagen1.addEventListener('mouseover',function () {
    console.log('Imagen de dinosaurio');
  });
  100





/**
 ******************************************************************************
 * Evento carga (load): Ejercicio 6
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

window.addEventListener('scroll', function (event) {
        console.log('Se ha realizado un desplazamiento hacia abajo');
    

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

/*const myList = document.getElementById('myList');
const newElement = document.createElement('li');
newElement.textContent = 'Elemento 3';
myList.appendChild(newElement);

*/

const myList = document.getElementById('myList');
myList.addEventListener('click', function (event) {
    console.log(event.target.textContent);
  });


  /* Cambio de casilla*/ 

  const casilla = document.getElementById('male');
  casilla.addEventListener('click', function (event) {
    console.log(casilla.checked);
  });


/* Ocultar Mostrar*/

const boton3 = document.getElementById('miBoton3');
const text1 = document.getElementById('text1');
boton3.addEventListener('click', function (event) {
    if(boton3.textContent === "Ocultar"){
        boton3.textContent = "Mostrar";
        text1.style.display = "none"
    }
    else{
        boton3.textContent = "Ocultar";
        text1.style.display = "block"
    }
    
    });

/* Docle click*/

const boton4 = document.getElementById('miBoton4');

boton4.addEventListener('dblclick', function () {
    console.log("Doble click realizado");
  });

/* Calculadora */

const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = document.querySelector('.calculator__display');

const calculate = (n1, operator, n2) => {
    let result = ''
    
    if (operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2)
      } else if (operator === 'subtract') {
        result = parseFloat(n1) - parseFloat(n2)
      } else if (operator === 'multiply') {
        result = parseFloat(n1) * parseFloat(n2)
      } else if (operator === 'divide') {
        result = parseFloat(n1) / parseFloat(n2)
      }
    return result
  }

keys.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        const key = event.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        if (!action) {
            console.log('number key!')
            if (displayedNum === '0' || previousKeyType ==='operator') {
                display.textContent = keyContent;
            }
            else{
                display.textContent = displayedNum + keyContent;
            }
          }
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
          ) {
            console.log('operator key!')
            key.classList.add('is-depressed')
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
            calculator.dataset.previousKeyType = 'operator';
          }
        if (action === 'decimal') {
        console.log('decimal key!')
        display.textContent = displayedNum + '.';
        }
        
        if (action === 'clear') {
        console.log('clear key!')
        display.textContent = "0";
        }
        
        if (action === 'calculate') {
        console.log('equal key!')
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        const secondValue = displayedNum;
        display.textContent = calculate(firstValue, operator, secondValue);
        calculator.dataset.previousKeyType = 'calculate';
        }

        Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'))
}
   })

/* Temporizador */

window.setInterval(imprimirsegundos, 1000);
var segundos = 0;
function imprimirsegundos(){
    segundos = segundos+1;
    console.log("paso ",segundos," segundo")
}

/** Adivinanza */

const adivina = document.getElementById("adivina");
const verifica = document.getElementById("verifica");
const respuesta = document.getElementById("respuesta");

verifica.addEventListener("click", function(){
    if(adivina.value === "pato"){
        respuesta.textContent = "RESPUESTA CORRECTA";
    }
    else {
        respuesta.textContent = "RESPUESTA INCORRECTA";
    }
})

/** Detecat cambio de tamaño */

go();
window.addEventListener('resize', go); // no funciono el console log en edge no sé porqué

function go(){
  document.querySelector('.width').innerText = document.documentElement.clientWidth;
  document.querySelector('.height').innerText = document.documentElement.clientHeight;
}

/** Detecat cambio de tamaño */

const aleatorio = document.getElementById("aleatorio");
aleatorio.addEventListener('click', function (){
    console.log(Math.round(Math.random()*90/10+1));
})

/**Arrastrar y soltar imagenes */

origen1=document.getElementById('imagen');
origen1.addEventListener('dragstart', arrastrado, false);
origen1.addEventListener('dragend', finalizado, false);
soltar=document.getElementById('cajasoltar');
soltar.addEventListener('dragenter', entrando, false);
soltar.addEventListener('dragleave', saliendo, false);
soltar.addEventListener('dragover', function(e){
e.preventDefault(); }, false);
soltar.addEventListener('drop', soltado, false);

function entrando(e){
    e.preventDefault();
    soltar.style.background='rgba(0,150,0,.2)';
}
function saliendo(e){
    e.preventDefault();
    soltar.style.background='#FFFFFF';
}
function finalizado(e){
    elemento=e.target;
    elemento.style.visibility='hidden'; 
}
function arrastrado(e){
    var codigo='<img src="'+origen1.getAttribute('src')+'">';
    e.dataTransfer.setData('Text', codigo);
}
function soltado(e){
e.preventDefault();
    soltar.style.background='#FFFFFF';
    soltar.innerHTML=e.dataTransfer.getData('Text');
}
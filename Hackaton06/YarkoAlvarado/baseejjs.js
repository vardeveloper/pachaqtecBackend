//-----------------EJ1

const boton1 = document.querySelector("#boton1");

boton1.addEventListener("click", () => {
  alert("Hola profesor");
});

//-----------------EJ2

const boton2 = document.querySelector("#boton2");

boton2.addEventListener("mouseover", () => {
  boton2.style.backgroundColor = "blue";
});
boton2.addEventListener("mouseout", () => {
  boton2.style.backgroundColor = "white";
});

//-----------------EJ3

const Lista1 = document.querySelector("#Lista1");
Lista1.addEventListener("change", () => {
  console.log(Lista1.value);
});

//-----------------EJ4

window.addEventListener("keydown", (event) => {
  console.log(event.key);
});

//-----------------EJ5

const formulario = document.querySelector("#formulario");
formulario.addEventListener("change", () => {
  console.log(formulario.value);
});

const form = document.querySelector("#form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let formulario1 = new FormData(event.target); console.log(event.target)
  let datos = {};
  console.log(formulario1)
  for (var entrada of formulario1.entries()) {
    datos[entrada[0]] = entrada[1];
  }
  console.log(datos);
});

//-----------------EJ6

window.addEventListener("scroll", (a) => {
    console.log('Scrolling');
});

//-----------------EJ7

const img = document.querySelector("#hey");
img.addEventListener("click", a=function(){
    console.log('Hey!')
})

//-----------------EJ8

window.addEventListener("load", (a) => {
    alert('Bienvenid@');
})
//-----------------EJ9

const parrafo = document.querySelector("#cambiacolor");
parrafo.addEventListener("click", ()=> {
    parrafo.style.color='green';
})
parrafo.addEventListener("click", (event) => {
    event.preventDefault();
})
//-----------------EJ10

const enfocable = document.querySelector("#enfocable");
enfocable.addEventListener("focus", ()=> {
    console.log('Enfocado')
})
enfocable.addEventListener("blur", ()=> {
    console.log('Desenfocado')
})
//-----------------EJ11

const Elemento1 = document.querySelector("#Elemento1");

Elemento1.addEventListener('click', ()=> {
    console.log('Diste click al elemento 1')
})
const Elemento2 = document.querySelector("#Elemento2");

Elemento2.addEventListener('click', ()=> {
    console.log('Diste click al elemento 2')
})
const Elemento3 = document.querySelector("#Elemento3");

Elemento3.addEventListener('click', ()=> {
    console.log('Diste click al elemento 3')
})
//-----------------EJ12

const casilla1 = document.querySelector("#casilla1");

casilla1.addEventListener('click', ()=> {
    console.log('Seleccionaste la casilla 1')
})
const casilla2 = document.querySelector("#casilla2");

casilla2.addEventListener('click', ()=> {
    console.log('Seleccionaste la casilla 2')
})
const casilla3 = document.querySelector("#casilla3");

casilla3.addEventListener('click', ()=> {
    console.log('Seleccionaste la casilla 3')
})

//-----------------EJ13

const botondesaparecedor = document.querySelector('#Mostrar/ocultar').style.display = 'none'
botondesaparecedor.addEventListener('click',() => {
    ghost.style.display = "block"
})

//-----------------EJ14



//-----------------EJ15



//-----------------EJ16



//-----------------EJ17



//-----------------EJ18



//-----------------EJ19



//-----------------EJ20




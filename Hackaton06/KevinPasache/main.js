// Ejercicio 1
const boton = document.querySelector(".click").addEventListener("click",()=>{
    console.log("Me diste click");
});

// console.log(boton);
// boton.addEvenListener("click", function(){
// })

//Ejercicio 2
let elemento = document.getElementById('miElemento');

elemento.addEventListener("mouseover", () => {
    elemento.style.backgroundColor = "red";
});
elemento.addEventListener("mouseout", () => {
    elemento.style.backgroundColor = "green";
});

//Ejercicio 3
const select = document.querySelector(".mySelect");
select.addEventListener("change", () => {
    console.log("Valor seleccionado: " + select.value);
});

//Ejercicio 4
window.addEventListener("keydown", (event) => {
    console.log("Se ha presionado la tecla: " + event.key);
  });

//Ejercicio 5
function mostrarValor() {
    let valorCampo = document.getElementById("campo").value;
    console.log(valorCampo);
  };

//Ejercicio 6
window.addEventListener('scroll', () => {
    console.log("Se ha realizado un desplazamiento");
});

// Ejercicio 7
const imagen = document.querySelector(".myPicture");
imagen.addEventListener("click", () => {
    console.log("Has dado click a la imagen");
});

// Ejercicio 8
window.addEventListener('load', () => {
    console.log('La página se ha cargado completamente');
});

// Ejercicio 9
const presionar = document.querySelector(".myLink");
    presionar.addEventListener("click", () => {
    presionar.classList.add("clickeado");
});

//Ejercicio 10
const input = document.getElementById("myInput");

input.addEventListener('focus', () => {
  console.log("El campo de entrada ha obtenido el enfoque");
});

input.addEventListener('blur', () => {
  console.log("El campo de entrada ha perdido el enfoque");
});

// Ejercicio 11
function mostrarMensaje(event) {
    let elemento = event.target;
    console.log("¡Se hizo clic en " + elemento.textContent + "!");
  }

// Ejercicio 12
const checkbox = document.getElementById('myCheckbox');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    console.log('La casilla ha sido marcada.');
  } else {
    console.log('La casilla ha sido desmarcada.');
  }
});

// Ejercicio 13
function toggleElement() {
    let elemento = document.querySelector(".elementoOculto");
    if (elemento.style.display === "none") {
      elemento.style.display = "block";
    } else {
      elemento.style.display = "none";
    }
}

// Ejercicio 14
document.addEventListener("DOMContentLoaded", () => {
    let element = document.getElementById("dobleClick");
  
    element.addEventListener("dblclick", () => {
      console.log("Se realizó un doble clic en el elemento");
    });
});
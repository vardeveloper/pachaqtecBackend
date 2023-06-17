//--------Ejercicio 1

const boton1 = document.querySelector("#boton1");
boton1.addEventListener("click",() => {
    alert("¡Haz hecho clic en el botón!")
});

//--------Ejercicio 2
const boton2 = document.querySelector("#boton2");

    boton2.addEventListener("mouseover",() =>{
      boton2.style.backgroundColor = "blue";
    })

    boton2.addEventListener("mouseout", () =>{
      boton2.style.backgroundColor = "white";
    })

//--------Ejercicio 3
let selectElement = document.getElementById("boton3");

    selectElement.addEventListener("change", function() {
      let selectedOption = selectElement.value;
      console.log("Opción seleccionada: " + selectedOption);
    });

//--------Ejercicio 4
window.addEventListener("keydown", function(event) {
    console.log("Tecla presionada: " + event.key);
});

//--------Ejercicio 5
function showInputValue() {
    let inputElement = document.getElementById("myInput");
    let inputValue = inputElement.value;
    console.log("Valor del campo de entrada: " + inputValue);
  }

//-----------------EJ6
window.addEventListener("scroll", function() {
     scrollPosition = window.scrollY;
    console.log("Desplazamiento hacia abajo: " + scrollPosition + "px");
  });


//-----------------EJ7
let imagen = document.getElementById("miImagen");
    
    imagen.addEventListener("click", function() {
      console.log("¡Has hecho clic en la imagen!");
    });


//-----------------EJ8
window.addEventListener("load", function() {
    let message = "¡Bienvenido a la página!";
    alert(message);
  });


//-----------------EJ9
function changeColor(event) {
    event.preventDefault();
    let linkElement = event.target;
    linkElement.style.color = "red";
  }


//-----------------EJ10
let inputElement = document.getElementById("myInput");

inputElement.addEventListener("focus", function() {
  console.log("El campo de entrada ha recibido el enfoque.");
});

inputElement.addEventListener("blur", function() {
  console.log("El campo de entrada ha perdido el enfoque.");
});


//-----------------EJ11
let listItems = document.querySelectorAll("#Milista1");

listItems.forEach(function(item) {
  item.addEventListener("click", function() {
    if (item.classList.contains("selected")) {
      item.classList.remove("selected");
    } else {
      item.classList.add("selected");
    }
    console.log("Se hizo clic en el elemento: " + item.textContent);
  });
});

//-----------------EJ12
let checkbox1 = document.getElementById("checkbox1");
    let checkbox2 = document.getElementById("checkbox2");

    checkbox1.addEventListener("change", function() {
      if (checkbox1.checked) {
        console.log("Casilla de verificación 1 marcada");
      } else {
        console.log("Casilla de verificación 1 desmarcada");
      }
    });

    checkbox2.addEventListener("change", function() {
      if (checkbox2.checked) {
        console.log("Casilla de verificación 2 marcada");
      } else {
        console.log("Casilla de verificación 2 desmarcada");
      }
    });


//-----------------EJ13
let toggleButton = document.getElementById("toggleButton");
    let myElement = document.getElementById("myElement");

    toggleButton.addEventListener("click", function() {
      if (myElement.style.display === "none") {
        myElement.style.display = "block";
      } else {
        myElement.style.display = "none";
      }
    });

//-----------------EJ14
var MiElemento = document.getElementById("MiElemento");

    MiElemento.addEventListener("dblclick", function() {
      console.log("Se realizó un doble clic en el elemento");
    });


//-----------------EJ15
let expression = "";

    function addToExpression(value) {
      expression += value;
      document.getElementById("result").value = expression;
    }

    function calculate() {
      try {
        let result = eval(expression);
        document.getElementById("result").value = result;
      } catch (error) {
        document.getElementById("result").value = "Error";
      }
    }

    function clearExpression() {
      expression = "";
      document.getElementById("result").value = "";
    }


//-----------------EJ16
let liveUpdateElement = document.getElementById("liveUpdate");
let counter = 0;

function updateContent() {
  counter++;
  liveUpdateElement.textContent = "Contador: " + counter;

  requestAnimationFrame(updateContent);
}

updateContent();

//-----------------EJ17
let options = document.getElementById("options");
    let result = document.getElementById("result");

    options.addEventListener("click", function(event) {
      let selectedOption = event.target;

      let correctOption = document.querySelector(".correct");
      let incorrectOption = document.querySelector(".incorrect");

      if (correctOption) {
        correctOption.classList.remove("correct");
      }

      if (incorrectOption) {
        incorrectOption.classList.remove("incorrect");
      }

      if (selectedOption.textContent === "Elefante") {
        result.textContent = "¡Respuesta correcta!";
        result.style.color = "green";
        selectedOption.classList.add("correct");
      } else {
        result.textContent = "Respuesta incorrecta. Intenta de nuevo.";
        result.style.color = "red";
        selectedOption.classList.add("incorrect");
      }
    });


//-----------------EJ18

window.addEventListener("resize", function() {
    console.log("El tamaño de la ventana ha cambiado");
  });


//-----------------EJ19

function generarNumeroAleatorio() {
    var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    alert("El número aleatorio generado es: " + numeroAleatorio);
  }



  //-----------------EJ20

  let draggableElement = document.getElementById("draggable");
  let droppableElement = document.getElementById("droppable");

  draggableElement.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
  });

  droppableElement.addEventListener("dragover", function(event) {
    event.preventDefault();
  });

  droppableElement.addEventListener("drop", function(event) {
    event.preventDefault();
    let draggedElementId = event.dataTransfer.getData("text/plain");
    console.log("Elemento " + draggedElementId + " soltado con éxito");
  });







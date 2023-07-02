
let options = document.querySelectorAll('.option');
let questions = document.querySelectorAll('.question');
let submitButton = document.querySelector('#submit');
let score = 0;


questions.forEach( (question) => {
    question.querySelectorAll('.option').forEach( (option) => {
        option.addEventListener('click', (event)=>{
            // Verificar si la opción seleccionada es la correcta
            if (event.target.textContent.charAt(0) === 'B') {
                // Incrementar la puntuación si es correcta
                score++;
                // Cambiar el color de fondo para indicar que es la respuesta correcta
                option.style.backgroundColor = 'green';
            } else {
                // Cambiar el color de fondo para indicar que es una respuesta incorrecta
                option.style.backgroundColor = 'red';
            }
            // Deshabilitar el clic en todas las opciones después de seleccionar una respuesta
            question.querySelectorAll('.option').forEach(function(opt) {
                opt.style.pointerEvents = 'none';
            });
            });
    })
})

submitButton.addEventListener('click', ()=>{
    // Mostrar la puntuación obtenida
    console.log("")
    alert('Tu puntuación es: ' + score + ' de 3');
});
/*
// Agregar evento de clic a todas las opciones
options.forEach(function(option) {
    option.addEventListener('click', (event)=>{
    // Verificar si la opción seleccionada es la correcta
    if (event.target.textContent.charAt(0) === 'B') {
        // Incrementar la puntuación si es correcta
        score++;
        // Cambiar el color de fondo para indicar que es la respuesta correcta
        option.style.backgroundColor = 'green';
    } else {
        // Cambiar el color de fondo para indicar que es una respuesta incorrecta
        option.style.backgroundColor = 'red';
    }
    // Deshabilitar el clic en todas las opciones después de seleccionar una respuesta
    options.forEach(function(opt) {
        opt.style.pointerEvents = 'none';
    });
    });
});

// Agregar evento de clic al botón de enviar respuestas
submitButton.addEventListener('click', ()=>{
    // Mostrar la puntuación obtenida
    console.log("")
    alert('Tu puntuación es: ' + score + ' de 3');
});

*/
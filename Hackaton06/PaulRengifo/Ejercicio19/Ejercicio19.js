const button = document.querySelector("#button");

button.addEventListener('click', (event) =>{
    let input = document.querySelector("#random");
    let numero = Math.floor(Math.random() * 10);
    input.value = numero;
    
})
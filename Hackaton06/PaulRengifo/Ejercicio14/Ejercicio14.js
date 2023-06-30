const lenguajes = document.querySelector('#langs');
console.log(lenguajes);
lenguajes.addEventListener('dblclick', (event) => {
    console.log(`Seleccionaste ${event.target}`);
})
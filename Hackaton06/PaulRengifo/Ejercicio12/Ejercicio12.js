const lenguajes = document.querySelector('#langs');
console.log(lenguajes);
lenguajes.addEventListener('change', (event) => {
    console.log(`Seleccionaste ${event.target.value}`);
})
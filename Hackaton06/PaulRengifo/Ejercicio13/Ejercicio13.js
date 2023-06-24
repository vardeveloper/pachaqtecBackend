const boton = document.querySelector('#boton');

boton.addEventListener('click', () => {
    let h1 = document.querySelector('h1');
    if (h1.style.display != ''){
        h1.style.display = '';
    }else{
        h1.style.display = 'none';
    }
    
})

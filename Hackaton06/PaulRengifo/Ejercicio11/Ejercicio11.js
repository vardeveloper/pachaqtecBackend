const lista = document.querySelector('ul');
const boton = document.querySelector('#restart');
for (let i=0; i <= lista.childElementCount - 1; i++){
    let child = lista.children[i];
    child.addEventListener('click', (event) =>{
        event.target.style.background = 'cyan';
        console.log("Click");
    })
}

boton.addEventListener('click', ()=>{
    for (let i=0; i <= lista.childElementCount - 1; i++){
        let child = lista.children[i];
        child.style.background = '';
    }
})


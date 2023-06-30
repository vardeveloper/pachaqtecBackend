
let articulo = document.getElementById('article01');

articulo.addEventListener('mouseover', (event) => {
    event.target.style.background = "purple";
})
articulo.addEventListener('mouseout', (event) => {
    event.target.style.background = "";
})
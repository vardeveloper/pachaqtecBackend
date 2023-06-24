
  let dragItem = document.querySelector('.drag-item');
  let dropTarget = document.querySelector('.drop-target');

  // Agregar evento de arrastre al elemento
  dragItem.addEventListener('dragstart', (event) =>{
    // Guardar el ID del elemento arrastrado
    event.dataTransfer.setData('text/plain', event.target.id);
  });

  // Agregar evento de soltar al área de soltar
  dropTarget.addEventListener('drop', (event) =>{
    // Prevenir el comportamiento predeterminado
    event.preventDefault();

    // Obtener el ID del elemento arrastrado
    var draggedItemId = event.dataTransfer.getData('text/plain');

    // Mostrar un mensaje en la consola
    console.log('El elemento con ID ' + draggedItemId + ' ha sido soltado en el área de soltar.');

    // Restablecer estilos del área de soltar
    dropTarget.style.backgroundColor = '#f0f0f0';
  });

  dropTarget.addEventListener('dragenter', (event) =>{
    // Cambiar el color de fondo del área de soltar cuando se arrastra el elemento sobre ella
    dropTarget.style.backgroundColor = '#e0e0e0';
  });

  dropTarget.addEventListener('dragleave', (event) =>{
    // Restablecer el color de fondo del área de soltar cuando el elemento se arrastra fuera de ella
    dropTarget.style.backgroundColor = '#f0f0f0';
  });

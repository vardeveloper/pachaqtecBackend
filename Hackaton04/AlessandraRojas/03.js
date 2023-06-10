//Encontrar el número más grande en un arreglo.

function maxNum(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  }
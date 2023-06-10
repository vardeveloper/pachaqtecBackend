// Eliminar elementos duplicados de un arreglo.



data = [1,2,2,2,3,4,5,6,6,7];
let result = data.filter((item,index)=>{
    return data.indexOf(item) === index;
  })
console.log(result); //[1,2,6,5,9,'33']
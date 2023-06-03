// Generar un número aleatorio entre un rango dado.
const lista = [1,2,3,4,5,6,7,8,9]
const resultado = random => {
  let a = Math.floor(Math.random()*lista.length)
  return 'Resultado: '+ lista[a]
}
console.log(resultado(lista))
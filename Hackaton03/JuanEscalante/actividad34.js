//Imprimir tablas del 1 al 9

function tablaUnoANueve() {
	for (let i = 1; i <= 9; i++) {
  		for (let j = 1; j <= 9; j++) {
    			const resultado = i * j;
    			console.log(`${i} x ${j} = ${resultado}`);
  		}
		console.log("--------------------");
	}
}

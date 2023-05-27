//Encontrar el valor mas grande y mas pequeño de 20 inputs

function encontrarMaxYMin(numeros){
	let max = numeros[0];
	let min = numeros[0];

	for(let i = 0; i < numeros.length; i++){
		if(numeros[i]>max){
			max = numeros[i];
		}
		if(numeros[i]<min){
			min = numeros[i];
		}
	}
	
	return {max, min}
}
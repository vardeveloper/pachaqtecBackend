// 20. Hacer un algoritmo en Pseint que que lea 4 números enteros positivos 
//y verifique y realice las siguientes operaciones:
//¿Cuántos números son Pares?
//¿Cuál es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 números.
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido 
//entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
Proceso Operador
	numerospar = 0
	iterador = 0
	Definir a,b,c,d Como Entero
	Imprimir 'Ingresa 4 numeros'
	Leer a,b,c,d
	Mientras iterador <= 4 Hacer
		Si a % 2 == 0 Entonces
			numerospar = numerospar + 1
		FinSi
		Si b % 2 == 0 Entonces
			numerospar = numerospar + 1
		FinSi
		Si c % 2 == 0 Entonces
			numerospar = numerospar + 1
		FinSi
		Si d % 2 == 0 Entonces
			numerospar = numerospar + 1
		FinSi
		iterador = iterador + 1
	FinMientras
	Escribir'¿Cuántos números son Pares? ',numerospar
	
	
	
FinProceso

Funcion obtener_cantidad_pares(arreglo_numeros Por Referencia)
	cantidad_pares = 0
	Para i<-1 Hasta 4 Con Paso 1 Hacer
		Si  arreglo_numeros[i] % 2 == 0 Entonces
			cantidad_pares <- cantidad_pares + 1
		FinSi
	FinPara
	Imprimir "La cantidad de pares es: " cantidad_pares
FinFuncion

Funcion obtener_numero_mayor (arreglo_numeros Por Referencia)
	Definir numero_mayor Como Entero
	numero_mayor = arreglo_numeros[1]
	Si arreglo_numeros[2] > numero_mayor Entonces
		numero_mayor = arreglo_numeros[2]
	FinSi
	Si arreglo_numeros[3] >numero_mayor Entonces
		numero_mayor = arreglo_numeros[3]
	FinSi
	Si arreglo_numeros[4] >numero_mayor Entonces
		numero_mayor = arreglo_numeros[4]
	FinSi
	Imprimir "El numero mayor es: " numero_mayor
FinFuncion



Proceso operaciones_multiples
	Dimension arreglo_numeros[4]
	Imprimir "Ingrese primer numero"
	Leer numero1
	arreglo_numeros[1] = numero1
	Imprimir "Ingrese segundo numero"
	Leer numero2
	arreglo_numeros[2] = numero2
	Imprimir "Ingrese tercer numero"
	Leer numero3
	arreglo_numeros[3] = numero3
	Imprimir "Ingrese cuarto numero"
	Leer numero4
	arreglo_numeros[4] = numero4
	
	obtener_cantidad_pares(arreglo_numeros)
	obtener_numero_mayor(arreglo_numeros)
	
	Si numero3 % 2 == 0 Entonces
		Imprimir "El cuadrado del segundo es: " numero2 * numero2
	FinSi
	
	Si numero1 < numero4 Entonces
		media = (numero1 + numero2 + numero3 + numero4)/4
		Imprimir "La media de los 4 numeros es: " media
	FinSi
	
	Si numero2 > numero3 Entonces
		Si numero3 >= 50 y numero3 <= 700 Entonces
			suma = numero1 + numero2 + numero3 + numero4
			Imprimir "La suma de los 4 numeros es: " suma
		FinSi
	FinSi
	
	
	
	
FinProceso

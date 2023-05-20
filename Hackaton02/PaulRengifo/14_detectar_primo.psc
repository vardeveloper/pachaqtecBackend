//Grupo5 - Paul Rengifo
Proceso detectar_primo
	numero1 = 1
	contador = 0
	Imprimir "Ingrese un numero"
	Leer numero1
	Si numero1 == 1 o numero1 == 2 Entonces
		Imprimir "El numero es primo"
	SiNo
		Para x=1 Hasta numero1 Con Paso 1 Hacer
			modulo = numero1 % x
			Si modulo == 0 Entonces
				contador = contador + 1
			FinSi
		FinPara
		Si contador == 2 Entonces
			Imprimir "El numero es primo"
		SiNo 
			Imprimir "El numero no es primo"
		FinSi
	FinSi
	
	
	
FinProceso

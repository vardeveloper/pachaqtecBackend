Algoritmo SumaImpares
	
	Definir n, suma Como Entero
	
	Escribir "Ingrese n:"
	Leer n
	
	suma <- 0
	
	Para i <- 1 Hasta n Con Paso 1 Hacer
		Si i % 2 == 1
			suma <- suma + i
		FinSi
	FinPara
	
	Escribir "La suma de los números impares es ", suma
	
FinAlgoritmo

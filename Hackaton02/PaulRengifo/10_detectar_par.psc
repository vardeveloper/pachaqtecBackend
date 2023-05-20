//Grupo5 - Paul Rengifo
Proceso detectar_par
	numero1 = 0
	Imprimir "Ingrese un numero: "
	Leer numero1
	
	residuo = numero1 % 2
	Si residuo == 0 Entonces
		Imprimir "El numero es par"
	SiNo 
		Imprimir "El numero es impar"
	FinSi
	
FinProceso

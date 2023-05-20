//Grupo5 - Paul Rengifo
Proceso detectar_numero_mayor
	numero1 = 0
	numero2 = 0
	numero3 = 0
	
	Imprimir "Ingrese primer numero: "
	Leer numero1
	Imprimir "Ingrese segundo numero: "
	Leer numero2
	Imprimir "Ingrese tercer numero: "
	Leer numero3
	
	numero_mayor = numero1
	Si numero2 > numero_mayor Entonces
		numero_mayor = numero2
	FinSi
	Si numero3 > numero_mayor Entonces
		numero_mayor = numero3
	FinSi
	Imprimir "El numero mayor es: " numero_mayor
FinProceso

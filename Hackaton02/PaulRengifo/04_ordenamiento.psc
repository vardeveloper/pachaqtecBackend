Proceso ordenamiento
	numero1 = 0 //1
	numero2 = 0 //3
	numero3 = 0 //2
	
	
	Imprimir "Ingrese el primer numero: "
	Leer numero1
	Imprimir "Ingrese el segundo numero: "
	Leer numero2
	Imprimir "Ingrese el tercer numero: "
	Leer numero3
	Si numero1 > numero3 Entonces
		tmp = numero3
		numero3 = numero1
		numero1 = tmp
	FinSi
	
	Si numero1 > numero2
		tmp = numero2
		numero2 = numero1
		numero1 = tmp
	FinSi
	
	Si numero2 > numero3 Entonces
		tmp = numero3
		numero3 = numero2
		numero1 = tmp
	FinSi
	
	//numero1 = numero_mayor
	//numero2 = numero_medio
	//numero3 = numero_menor
	
	Imprimir "El numero menor es: " numero1
	Imprimir "El numero medio es: " numero2
	Imprimir "El numero mayor es: " numero3
	
	
	
FinProceso

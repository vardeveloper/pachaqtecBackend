Proceso comprar_ultimo_numero
	numero1 = 0
	modulo = 0
	Imprimir "Ingrese un numero"
	Leer numero1
	modulo = numero1 % 10
	Si modulo == 4 Entonces
		Imprimir "El numero finaliza en 4"
	SiNo
		Imprimir "El numero no finaliza en 4"
	FinSi
	
FinProceso

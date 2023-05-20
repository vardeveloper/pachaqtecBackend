// Grupo 5 - Paul Rengifo
Funcion obtener_numero_pi (numero_iteraciones Por Valor)
	numero_pi = 0
	Para  i<-0 Hasta numero_iteraciones Con Paso 1 Hacer
		modulo = i % 2
		Si modulo == 0 Entonces
			factor = 1
		SiNo 
			factor = -1
		FinSi
		
		numero_pi = numero_pi + 4 * factor/(2*i + 1)
	FinPara
	error = Abs(100 * (PI - numero_pi)/PI)
	Imprimir "El numero Pi con " numero_iteraciones " iteraciones : " numero_pi " - Erorr (" error "%)"
FinFuncion

Proceso algoritmo_gregory_leibniz

	Imprimir PI
	Para numero_iteraciones<-100000 Hasta 1000000 Con paso 100000 Hacer
		obtener_numero_pi(numero_iteraciones)
	FinPara
	
FinProceso

Funcion numero_fibonacci <- fibonacci (indice Por Valor)
	Si indice == 0 Entonces
		numero_fibonacci <- 0
	SiNo
		Si indice == 1 o indice == 2 Entonces
			numero_fibonacci <- 1
		SiNo
			numero_fibonacci <- fibonacci(indice - 1) + fibonacci(indice - 2)
		FinSi
	FinSi
	
FinFuncion

Proceso obtener_serie_fibonacci
	Para indice<-0 Hasta 15 Con Paso 1 Hacer
		Imprimir fibonacci(indice)
	FinPara
FinProceso

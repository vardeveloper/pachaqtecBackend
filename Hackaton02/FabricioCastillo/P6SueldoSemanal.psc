Algoritmo SueldoSemanal
	Definir horas, horas_extras, pago Como Real
	Escribir " Escribe las horas trabajadas "
	leer horas
	Si horas > 40 Entonces
		horas_extras = horas - 40
		pago = (40 * 20) + (horas_extras * 25)
	SiNo
		pago = horas * 20
		
	FinSi
		
Escribir " El pago semanal por las ",horas, " horas trabajadas es: $ ",pago

FinAlgoritmo

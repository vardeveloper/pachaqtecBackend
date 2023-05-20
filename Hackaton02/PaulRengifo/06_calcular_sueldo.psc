//Grupo5 - Paul Rengifo
Proceso calcular_sueldo
	horas_trabajadas = 0
	pago_hora = 20
	pago_horas_extra = 25
	horas_extra = 0
	sueldo = 0
	Imprimir "Ingrese el numero de horas trabajadas"
	Leer horas_trabajadas
	
	Si horas_trabajadas <= 0 Entonces
		Imprimir "Debe ingresar un numero positivo"
	SiNo
		Si horas_trabajadas > 40 Entonces
			horas_extra = horas_trabajadas - 40
		FinSi
		sueldo = 40 * pago_hora + horas_extra * pago_horas_extra
		Imprimir "Su sueldo semanal es: " sueldo
	FinSi
	
FinProceso

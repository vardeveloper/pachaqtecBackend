Proceso Pago_Heladeria
	
	//Numero identificador: Cajero=10 / Servidor = 15 / Preparador = 20 / Mantenimento = 25
	
	Cajero = 56
	Servidor = 64
	Preparador = 80
	Mantenimiento = 48
	identificador = 0
	dias = 0
	Pagototal = 0
	
	escribir "Ingresar numero identificador"
	leer identificador
	escribir "Ingrese dias trabajados"
	leer dias
	escribir "El pago total al empleado es"
	
	
	si identificador == 10 Entonces
		Pagototal = dias * Cajero
		Imprimir Pagototal
	FinSi
	si identificador == 15 Entonces
		Pagototal = dias * Servidor
		Imprimir Pagototal
	FinSi
	
	si identificador == 20 Entonces
		Pagototal = dias * Preparador
		Imprimir Pagototal
	
	FinSi
	si identificador == 25 Entonces
		Pagototal = dias * Mantenimiento
		Imprimir Pagototal
	FinSi
	
FinProceso

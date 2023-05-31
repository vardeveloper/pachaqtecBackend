Algoritmo heladeria
	
	Definir num_iden,can_dias,pago Como Entero
	num_iden = 0
	can_dias = 0
	Escribir "1. Cajero   = 56$/día"
	Escribir "2. Servidor = 64$/día"
	Escribir "3. Preparador de mezclas = 80$/día"
	Escribir "4. Mantenimiento = 48$/día"
	Mientras num_iden < 1 o num_iden > 4 Hacer
		Escribir " Ingrese número identificador " Sin Saltar
		Leer num_iden
	FinMientras
	
	Mientras can_dias < 1 o can_dias > 6 Hacer
		Escribir " Ingrese la cantidad de días que trabajó "Sin Saltar
		Leer can_dias
	FinMientras
	
	Segun num_iden Hacer
		1:pago = can_dias * 56    // Cajero
		2:pago = can_dias * 64    // Servidor
		3:pago = can_dias * 80    // Preparador de mezclas
		4:pago = can_dias * 48    // Mantenimiento
	FinSegun
	
	Escribir " El pago será de: ", pago ," $ "

FinAlgoritmo
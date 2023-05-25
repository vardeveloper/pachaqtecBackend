Algoritmo TiendaDeHelados
	Definir compra, descuento Como Real
	
	Definir tipo Como Entero
	
	Escribir "Ingresa el total de la compra"

	leer compra
	
	Escribir "Ingresa una opcion"
	
	Escribir "1 = Tipo A"
	
	Escribir "2 = Tipo B"
	
	Escribir "3 = Tipo C"
	
	
	leer tipo
	si tipo == 1 Entonces
		descuento = compra * .10
		
	SiNo
		si tipo == 2 Entonces
			descuento = compra * .15
			
		SiNo
			si tipo == 3 Entonces
				descuento = compra * .20
			SiNo
				descuento = 0
				
			FinSi
			
		FinSi
		
	FinSi
	Escribir "El total a pagar es: $",compra - descuento
	
	Escribir "El descuento aplicado es: $",descuento

FinAlgoritmo
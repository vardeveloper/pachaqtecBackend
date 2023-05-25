Algoritmo TiendaDeZapatos
	Definir precio, pago, descuento Como Real
	
	Definir compra Como Entero
	
	Definir resp Como Caracter
	
	precio<-80
	
	resp <- 's'
	
	Escribir "Promoción en zapatos"
	
	Mientras resp=='s' Hacer
		
		Escribir 'Ingrese cantidad de zapatos su compra' Sin Saltar
		Leer compra
		
		Si compra>10 Entonces
			
			descuento <- 10
			
		FinSi
		
		Si compra>20 y compra <= 30 Entonces
			
			descuento <- 20
			
		FinSi
		
		Si compra>30 Entonces
			
			descuento <- 40
			
		FinSi
		
		pago <- (compra*precio) - (compra*precio*descuento/100)
		
		Escribir 'Total compra: ',compra*precio
		
		Escribir 'Descuento: ',descuento,'% '
		
		Escribir 'Total a pagar: ',pago
		
		Repetir
			
			Escribir '¿Desea otro cálculo? (s/n)'
			
			Leer resp
			
		Hasta Que (resp=='s' O resp=='n')
		
	FinMientras
	
	FinAlgoritmo
	
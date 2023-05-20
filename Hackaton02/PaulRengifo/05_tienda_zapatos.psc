Proceso tienda_zapatos
	numero_zapatos = 0
	precio_unitario_zapato = 80
	monto_total = 0
	factor_descuento = 1
	Imprimir "Numero de zapatos comprados"
	Leer numero_zapatos
	Si numero_zapatos <= 0 Entonces
		Imprimir "Ingrese un numero positivo"
	SiNo
		Si numero_zapatos >= 30 Entonces
			factor_descuento = 0.6
		FinSi
		Si numero_zapatos >= 20 Entonces
			factor_descuento = 0.8
		FinSi
		Si numero_zapatos >= 10 Entonces
			factor_descuento = 0.9
		FinSi
		monto_total = numero_zapatos * precio_unitario_zapato * factor_descuento
		Imprimir "El Monto total sin descuento: " monto_total / factor_descuento
		Imprimir "El Monto total a pagar: " monto_total
	FinSi
FinProceso

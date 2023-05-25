Proceso tienda_helados
	tipo_membresia = ""
	descuento = 0
	precio_final = 0
	
	Imprimir "Ingrese el tipo de membresia: "
	Leer tipo_membresia
	Si tipo_membresia <> "A" y tipo_membresia <> "B" y tipo_membresia <> "C" Entonces
		Imprimir tipo_membresia "No es una membresia valida"
	SiNo
		Si tipo_membresia == "A" Entonces
			descuento = 10
		FinSi
		Si tipo_membresia == "B" Entonces
			descuento = 15
		FinSi
		Si tipo_membresia == "C" Entonces
			descuento = 20
		FinSi
		Imprimir "El descuento es del " descuento "%"
	FinSi
FinProceso

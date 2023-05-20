Proceso Precio_CD
	Articulo = 0
	TotalPagar = 0
	Ganancia= 0
	
	imprimir "ingrese total de articulos a comprar"
	leer Articulo
	imprimir "El precio a pagar seria:"
	Imprimir TotalPagar
	imprimir "La ganacia seria de:"
	Imprimir Ganancia
	
	Si Articulo <= 9 Entonces
		TotalPagar = Articulo * 10
		Ganancia = 8.25 * TotalPagar/100
	
	FinSi
	Si Articulo >=10 y Articulo <= 99 Entonces
		TotalPagar = Articulo * 8
		Ganancia = 8.25 * TotalPagar/100
		
	FinSi
	Si Articulo >= 100 y Articulo <= 499 Entonces
		TotalPagar = Articulo * 7
		Ganancia = 8.25 * TotalPagar/100
		
	FinSi
	Si Articulo > 500 Entonces
		TotalPagar = Articulo * 6
		Ganancia = 8.25 * TotalPagar/100
		
	FinSi
	
	
	
FinProceso

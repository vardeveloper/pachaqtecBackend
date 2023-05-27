// 18. Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes.
// Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:			
// $10. Si se compran unidades separadas hasta 9.
// $8. Si se compran entre 10 unidades hasta 99.
// $7. Entre 100 y 499 unidades.
// $6. Para mas de 500 unidades.
// La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint 
// que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.

Proceso Ganancias_de_Venta_de_CDs
	Qp = 0
	ga = 0.0825
	Imprimir 'Ingresa Q productos'
	Leer Qp
	
	Si Qp <= 10 Entonces
		precioT = (Qp*10)+((Qp*10)*ga)
	FinSi
	Si Qp > 10 y qp < 99 Entonces
		precioT = (Qp*8)+((Qp*10)*ga)
	FinSi
	Si Qp > 100 y qp < 499 Entonces
		precioT = (Qp*7)+((Qp*10)*ga)
	FinSi
	Si Qp > 500 Entonces
		precioT = (Qp*6)+((Qp*10)*ga)
	FinSi
	
	Imprimir 'Precio total es: ',precioT
FinProceso

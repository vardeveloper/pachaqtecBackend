Algoritmo OrdenNumeros
	Definir n,x,a,b,c como real
Escribir "Escribe Tres numero"
Para x = 1 Hasta 3 Con Paso 1 Hacer
	Leer n
	Si x == 1 Entonces
		a = n
	FinSi
	Si x==2 Entonces
		Si a < n Entonces
			b = a
			a = n
		SiNo
			b = n
		FinSi
	FinSi
		si x==3 Entonces
			Si a < n entonces
				c = b
				b = a
				a = n
			SiNo
				SI b < n Entonces
					c = b
					b = n 
				SiNo
					c = n
				FinSi
			FinSi
		FinSi
	Fin Para
	Escribir c
	Escribir b
	Escribir a
FinAlgoritmo
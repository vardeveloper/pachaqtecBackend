Algoritmo P14NumerosPrimos
	Definir x,n,contador Como Entero
	Escribir "Escribe un número"
	leer n
	x = 1
	contador = 0
    Mientras  x <= n Hacer
	si n mod x == 0 Entonces
	contador = contador + 1
	FinSi
	x = x + 1
	FinMientras
	si contador == 2 Entonces
	
	Escribir "El número " ,n," es primo"
	SiNo
	Escribir "El número " , n ," no es primo"
	FinSi   
    FinAlgoritmo

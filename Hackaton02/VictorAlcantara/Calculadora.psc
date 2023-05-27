Algoritmo Calculadora
	Numero1 = 0
	Numero2 = 0
	Operacion = ""
	Resultado = 0
	Mensaje = ""
	
	Escribir "Dame el primero numero"
	Leer Numero1
	Escribir "Dame el segundo numero"
	Leer Numero2
	Escribir "Dime la operacion que deseas realizar (Suma, Resta, Multiplicacion y Division)"
	Leer Operacion
	
	
	
//	si Operacion == "+" Entonces
//		Resultado = Numero1 + Numero2
//	FinSi
	
	Segun Operacion Hacer
		'+':
			Resultado = Numero1 + Numero2
			Mensaje = "La suma de "
		'-':
			Resultado = Numero1 - Numero2
			Mensaje = "La resta de "
		'*':
			Resultado = Numero1 * Numero2
			Mensaje = "La multiplicacion de "
		'/':
			Resultado = Numero1 / Numero2
			Mensaje = "La division de "
		De Otro Modo:
			Resultado = 0
	Fin Segun
	
	Escribir Mensaje Numero1 " " Operacion " " Numero2 " es " Resultado
	
FinAlgoritmo

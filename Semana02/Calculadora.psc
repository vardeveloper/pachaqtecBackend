// necesito una funcion que calcule solo una de las operacione aritmeticas: suma, resta, multiplicacion y division 
// de los valores numericos y que el usuario elija la operacion.
// los numeros tiene que ser enteros y mayor a 0

Proceso Calculadora
	
	Numero1 = 0
	Numero2 = 0
	Resultado = 0
	
	Imprimir "Ingrese el simbolo de la Operacion a realizar:"
	Imprimir "	1. Suma (+) "
	Imprimir "	2. Resta (-)"
	Imprimir "	3. Multiplicacion (*)"
	Imprimir "	4. Division (/)"
	
	Leer OP
	
	Imprimir "Ingrese el primero numero"
	Leer Numero1
	
	Imprimir "Ingrese el segundo numero"
	Leer Numero2
	
//	Si OP == '+' y Numero1 > 0 y Numero2 > 0 Entonces
//		Resultado = Numero1 + Numero2
//		Imprimir "La suma de " Numero1 " + " Numero2 " es: " Resultado
	//	Fin Si
	
	Segun OP Hacer
		'2':
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
	
	Escribir Mensaje Numero1 " " OP " " Numero2 " es " Resultado

FinProceso

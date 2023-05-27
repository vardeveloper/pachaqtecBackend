Algoritmo numero3digitos
	Definir numero,tamaño como entero
	Definir continuar,Cnum Como Caracter
	continuar <-"s"
	Mientras continuar ="s" Hacer
	Escribir "Saber si número tiene tres dígitos: "
	Escribir "******************************* "
	Escribir "Ingrese número: "
	Repetir
		Leer num
	Hasta Que num >= 0
	Cnum <- ConvertirATexto(num)
	tamaño <- Longitud(Cnum)
	si tamaño = 3 Entonces
		Escribir "El número ingresado tiene 3 dígitos "
	SiNo
		Escribir "El número ingresado NO tiene 3 dígitos "
		Escribir "El número tiene: ", tamaño, " dígitos"
	FinSi
	Repetir
		Escribir "¿Continuar? (s/n)"
		Leer continuar
		continuar <- Minusculas(continuar)
	Mientras Que (continuar<>"s" Y continuar<>"n")
	
FinMientras
FinAlgoritmo

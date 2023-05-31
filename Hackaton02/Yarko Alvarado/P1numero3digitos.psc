Algoritmo numero3digitos
	Definir numero,tama�o como entero
	Definir continuar,Cnum Como Caracter
	continuar <-"s"
	Mientras continuar ="s" Hacer
	Escribir "Saber si n�mero tiene tres d�gitos: "
	Escribir "******************************* "
	Escribir "Ingrese n�mero: "
	Repetir
		Leer num
	Hasta Que num >= 0
	Cnum <- ConvertirATexto(num)
	tama�o <- Longitud(Cnum)
	si tama�o = 3 Entonces
		Escribir "El n�mero ingresado tiene 3 d�gitos "
	SiNo
		Escribir "El n�mero ingresado NO tiene 3 d�gitos "
		Escribir "El n�mero tiene: ", tama�o, " d�gitos"
	FinSi
	Repetir
		Escribir "�Continuar? (s/n)"
		Leer continuar
		continuar <- Minusculas(continuar)
	Mientras Que (continuar<>"s" Y continuar<>"n")
	
FinMientras
FinAlgoritmo

Algoritmo IncrementoDeSueldo
	Escribir "Ingresa el valor de sueldo:" ;
	Leer sueldo;
	incremento <- 0 ;
	Si sueldo<2000 Entonces
		incremento <- sueldo*0.5;
	FinSi
	Si sueldo>=2000 Entonces
		Incremento <- sueldo*0.10 ;
	FinSi
	nuevo_sueldo <- sueldo+incremento;
	Escribir "Valor de incremento:", incremento;
	Escribir "Valor de nuevo sueldo:", nuevo_sueldo;
	
FinAlgoritmo

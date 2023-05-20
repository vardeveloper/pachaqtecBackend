//Grupo5 - Paul Rengifo
Proceso calcular_promedio
	nota1 = 0
	nota2 = 0
	nota3 = 0
	Imprimir "Ingrese nota del parcial: "
	Leer nota1 
	Imprimir "Ingrese nota de practicas: "
	Leer nota2
	Imprimir "Ingrese nota del final: "
	Leer nota3 
	
	suma_notas = nota1 + nota2 + nota3
	promedio_notas = suma_notas / 3
	Si suma_notas >= 32 Entonces
		Imprimir "Aprobado"
	SiNo
		Imprimir "Jalado"
	FinSi
FinProceso

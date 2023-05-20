//Grupo5 - Paul Rengifo
Proceso calcular_aumento
	factor_aumento = 0
	sueldo_base = 0
	sueldo_final = 0
	Imprimir "Ingrese Sueldo base: "
	Leer sueldo_base
	
	Si sueldo_base <= 0 Entonces
		Imprimir "Ingrese un numero positivo"
	SiNo
		Si sueldo_base <= 2000 Entonces
			factor_aumento = 0.1
		SiNo
			factor_aumento = 0.05
		FinSi
		sueldo_final = sueldo_base * (1 + factor_aumento)
		Imprimir "El sueldo final es: " sueldo_final
	FinSi
FinProceso

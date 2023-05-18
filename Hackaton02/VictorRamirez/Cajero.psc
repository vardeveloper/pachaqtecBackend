// Muestra como hacer un menú simple con las estructuras Repetir-Hasta Que y Según

Proceso Cajero
	
	cta1 = ''
	cta1_saldo_inicial = 1500
	cta1_saldo_final = 0
	cta2 = ''
	cta2_saldo = 2500
	cta2_saldo_final = 0
	
	monto_retiro = 0
	
	Escribir "Ingrese # de cuenta:"
	Leer cta1
	
    Repetir
        // mostrar menu
        Limpiar Pantalla
        Escribir "Menú de transacciones:"
        Escribir "   1. Retiro"
        Escribir "   2. Deposito"
        Escribir "   3. Transferencia"
        Escribir "   4. Salir"
        // ingresar una opcion
        Escribir "Elija una opción (1-4): "
        Leer OP
        // procesar esa opción
        Segun OP Hacer
            1:
				Escribir "Tu Saldo Inicial es: " cta1_saldo_inicial
                Escribir "Ingrese monto a Retirar:"
				Leer monto_retiro
				
				Si monto_retiro <= cta1_saldo_inicial Entonces
					cta1_saldo_final = cta1_saldo_inicial - monto_retiro
					Escribir "   # de cuenta: " cta1
					Escribir " Saldo Inicial: " cta1_saldo_inicial
					Escribir "   Saldo Final: " cta1_saldo_final
					cta1_saldo_inicial = cta1_saldo_final
				SiNo
					Escribir "Monto a retirar superior a tu saldo"
				Fin Si
            2:
                Escribir "Películas recomendables:"
                Escribir " + Matrix (1999)"
                Escribir " + El último samuray (2003)"
                Escribir " + Cars (2006)"
            3:
                Escribir "Discos recomendables:"
                Escribir " + Despedazado por mil partes (La Renga, 1996)"
                Escribir " + Búfalo (La Mississippi, 2008)"
                Escribir " + Gaia (Mägo de Oz, 2003)"
            4:
                Escribir "Gracias, vuelva prontos"
            De otro modo:
                Escribir "Opción no válida"
        FinSegun
        Escribir "Presione enter para continuar"
        Esperar Tecla
    Hasta Que OP=4
FinProceso

Proceso Promedio
	
    Definir Nota1, Nota2 , Nota3 como Entero;
    Definir acum,dato,prom como Reales;
    Escribir "Ingrese las Notas:";
    Leer n;
    
    acum<-0;
    
    Para i<-1 Hasta n Hacer
        Escribir "Ingrese el dato ",i,":";
        Leer dato;
        acum<-acum+dato;
    FinPara
    
    prom<-acum/n;
    
    Escribir "El promedio es: ",prom;
    Si Prom >= 13 Entonces
		Escribir "Alumno Aprobado"
	FinSi
	Si Prom <= 12 Entonces
		Escribir "Alumno Desaprobado"
	FinSi
FinProceso

-------------------------------------------------------------------------------
-- Ciclo WHILE
-------------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE sp_ejemplo_while()
LANGUAGE plpgsql
AS $$
DECLARE
  contador integer := 1;
BEGIN
  WHILE contador <= 5 LOOP
    RAISE NOTICE 'Iteración %', contador;
    contador := contador + 1;
  END LOOP;
END;
$$;

CALL sp_ejemplo_while()

-------------------------------------------------------------------------------
-- En este procedimiento almacenado llamado ejemplo_while, se utiliza un ciclo 
-- WHILE para imprimir un mensaje en la consola durante 5 iteraciones. 
-- La variable contador se inicializa en 1 y se incrementa en cada iteración 
-- hasta que la condición contador <= 5 se cumple.
-------------------------------------------------------------------------------



-------------------------------------------------------------------------------
-- Ciclo LOOP
-------------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE sp_ejemplo_loop()
LANGUAGE plpgsql
AS $$
DECLARE
  contador integer := 1;
BEGIN
  LOOP
    IF contador > 5 THEN
      EXIT; -- Condición de salida del ciclo
    END IF;

    RAISE NOTICE 'Iteración %', contador;
    contador := contador + 1;
  END LOOP;
END;
$$;

CALL sp_ejemplo_loop()

-------------------------------------------------------------------------------
-- En este procedimiento almacenado llamado ejemplo_loop, se utiliza un ciclo LOOP 
-- para imprimir un mensaje en la consola hasta que contador sea mayor que 5. 
-- En cada iteración, la variable contador se incrementa, y cuando se cumple la 
-- condición contador > 5, el ciclo se termina utilizando la instrucción EXIT.
-------------------------------------------------------------------------------



-------------------------------------------------------------------------------
--- Ejemplo de provcedimiento almacenado
-------------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE obtener_detalles_contacto(
  IN cliente_nombre VARCHAR
) AS $$
BEGIN
  DECLARE
    cliente_id INTEGER;
    cliente_telefono VARCHAR(20);
    cliente_correo VARCHAR(100);
  BEGIN
    -- Buscar el ID del cliente basado en el nombre
    SELECT id, telefono, correo INTO cliente_id, cliente_telefono, cliente_correo
    FROM clientes
    WHERE nombre = cliente_nombre;

    -- Mostrar los detalles del cliente si se encontró
    IF cliente_id IS NOT NULL THEN
      RAISE NOTICE 'Detalles de contacto del cliente: ID=%, Teléfono=%, Correo=%', cliente_id, cliente_telefono, cliente_correo;
    ELSE
      RAISE EXCEPTION 'El cliente "%" no fue encontrado.', cliente_nombre;
    END IF;
  END;
END;
$$ LANGUAGE PLPGSQL;

CALL obtener_detalles_contacto('NombreCliente');



-------------------------------------------------------------------------------
--- Ejemplo de concatenación en PostgreSQL:
-------------------------------------------------------------------------------

-- Usando el operador ||
SELECT 'Hola' || ' ' || 'Mundo'; -- Devuelve 'Hola Mundo'

-- Usando la función CONCAT
SELECT CONCAT('Hola', ' ', 'Mundo'); -- Devuelve 'Hola Mundo'



-------------------------------------------------------------------------------
-- Ejemplo 1: Ciclo WHILE para actualizar registros en una tabla
--
-- Supongamos que tienes una tabla llamada "empleados" con una columna "antiguedad" 
-- que representa la cantidad de años que lleva un empleado trabajando en la empresa. 
-- Queremos aumentar en 1 año la antigüedad de todos los empleados hasta que alcancen 
-- un máximo de 10 años. Utilizaremos un ciclo WHILE para lograr esto:
-------------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE aumentar_antiguedad()
AS $$
DECLARE
  empleado_record RECORD;
BEGIN
  FOR empleado_record IN SELECT * FROM empleados
  LOOP
    WHILE empleado_record.antiguedad < 10
    LOOP
      UPDATE empleados SET antiguedad = antiguedad + 1 WHERE id = empleado_record.id;
      empleado_record.antiguedad := empleado_record.antiguedad + 1;
    END LOOP;
  END LOOP;
END;
$$;
LANGUAGE plpgsql;

-------------------------------------------------------------------------------
-- En este ejemplo, el procedimiento aumentar_antiguedad utiliza un ciclo FOR para 
-- recorrer todos los registros de la tabla "empleados". Luego, dentro de este ciclo, 
-- utiliza un ciclo WHILE para aumentar la antigüedad de cada empleado en 1 año 
-- hasta que alcance el máximo de 10 años.
-------------------------------------------------------------------------------



-------------------------------------------------------------------------------
-- Ejemplo 2: Ciclo LOOP para cálculo de suma acumulada
-- 
-- Supongamos que tienes una tabla llamada "ventas" con una columna "monto" que 
-- representa el monto de ventas diarias. Deseamos calcular la suma acumulada 
-- de ventas para cada día utilizando un ciclo LOOP:
-------------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE calcular_suma_acumulada()
AS $$
DECLARE
  suma_acumulada NUMERIC := 0;
  venta_record RECORD;
BEGIN
  FOR venta_record IN SELECT * FROM ventas ORDER BY fecha
  LOOP
    suma_acumulada := suma_acumulada + venta_record.monto;
    RAISE NOTICE 'Fecha: % - Suma acumulada: %', venta_record.fecha, suma_acumulada;
  END LOOP;
END;
$$;
LANGUAGE plpgsql;

-------------------------------------------------------------------------------
-- En este ejemplo, el procedimiento calcular_suma_acumulada utiliza un ciclo FOR 
-- para recorrer todos los registros de la tabla "ventas" ordenados por fecha. 
-- Luego, dentro de este ciclo, utiliza un ciclo LOOP para calcular la suma 
-- acumulada de ventas para cada día e imprimir el resultado en la consola.
-------------------------------------------------------------------------------

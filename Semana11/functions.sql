-------------------------------------------------------------------------------
-- Ciclo WHILE 
-------------------------------------------------------------------------------
-- El ciclo WHILE se utiliza para repetir una secuencia de acciones mientras se 
-- cumple una condición específica. En PostgreSQL, podemos implementar un ciclo 
-- WHILE utilizando la estructura de control LOOP junto con una condición que se evalúa en cada iteración.
-------------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION fn_ejemplo_while() RETURNS void AS $$
DECLARE
  contador INT := 1;
BEGIN
  WHILE contador <= 5 LOOP
    RAISE NOTICE 'Iteración %', contador;
    contador := contador + 1;
  END LOOP;
END
$$ LANGUAGE plpgsql;

SELECT fn_ejemplo_while()

-------------------------------------------------------------------------------
-- En este ejemplo, la función ejemplo_while utiliza un ciclo WHILE para imprimir 
-- un mensaje en la consola durante 5 iteraciones. La variable contador se inicializa 
-- en 1 y se incrementa en cada iteración hasta que la condición contador <= 5 se cumple.
-------------------------------------------------------------------------------



-------------------------------------------------------------------------------
-- Ciclo LOOP
-------------------------------------------------------------------------------
-- El ciclo LOOP se utiliza para repetir una secuencia de acciones indefinidamente 
-- hasta que se alcance una condición específica que termine el ciclo. Podemos 
-- utilizar un ciclo LOOP con una estructura IF para definir una condición de salida.
-------------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION fn_ejemplo_loop() RETURNS void AS $$
DECLARE
  contador INT := 1;
BEGIN
  LOOP
    IF contador > 5 THEN
      EXIT; -- Condición de salida del ciclo
    END IF;

    RAISE NOTICE 'Iteración %', contador;
    contador := contador + 1;
  END LOOP;
END
$$ LANGUAGE plpgsql;

SELECT fn_ejemplo_loop()

-------------------------------------------------------------------------------
-- En este ejemplo, la función ejemplo_loop utiliza un ciclo LOOP para imprimir 
-- un mensaje en la consola hasta que contador sea mayor que 5. En cada iteración, 
-- la variable contador se incrementa, y cuando se cumple la condición contador > 5, 
-- el ciclo se termina utilizando la instrucción EXIT.
-------------------------------------------------------------------------------



-------------------------------------------------------------------------------
-- función en PL/pgSQL que suma dos números:
-------------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION fn_sumar(a INT, b INT) 
RETURNS INT AS $$
BEGIN
  RETURN a + b;
END;
$$ LANGUAGE plpgsql;

SELECT sumar_numeros(5, 7); -- Devolverá 12

-------------------------------------------------------------------------------
-------------------------------------------------------------------------------



-------------------------------------------------------------------------------
-- función PL/pgSQL que aplica un descuento del 10% si el monto de una compra 
-- supera los $100, de lo contrario, no aplicar ningún descuento
-------------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION fn_aplicar_descuento(monto_compra NUMERIC) 
RETURNS NUMERIC AS $$
DECLARE
  monto_con_descuento NUMERIC;
BEGIN
  IF monto_compra > 100 THEN
    monto_con_descuento := monto_compra * 0.9; -- Aplicar 10% de descuento
  ELSE
    monto_con_descuento := monto_compra; -- No aplicar descuento
  END IF;

  RETURN monto_con_descuento;
END;
$$ LANGUAGE plpgsql;

SELECT aplicar_descuento(50); -- Devolverá 50 (sin descuento)
SELECT aplicar_descuento(120); -- Devolverá 108 (con descuento del 10%)

-------------------------------------------------------------------------------
-------------------------------------------------------------------------------



-------------------------------------------------------------------------------
--- función PL/pgSQL para paginar resultados:
-------------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION fn_paginar_resultados(
  page_number INTEGER,
  page_size INTEGER
) RETURNS SETOF clientes AS $$
DECLARE
  offset_value INTEGER;
BEGIN
  IF page_number < 1 THEN
    RAISE EXCEPTION 'El número de página debe ser mayor o igual a 1.';
  END IF;

  IF page_size < 1 THEN
    RAISE EXCEPTION 'El tamaño de página debe ser mayor o igual a 1.';
  END IF;

  offset_value := (page_number - 1) * page_size;

  RETURN QUERY
  SELECT *
  FROM clientes
  ORDER BY id
  LIMIT page_size
  OFFSET offset_value;
END;
$$ LANGUAGE plpgsql;

SELECT * FROM paginar_resultados(1, 10); -- Mostrar la primera página con 10 resultados
SELECT * FROM paginar_resultados(2, 10); -- Mostrar la segunda página con 10 resultados

-------------------------------------------------------------------------------
-------------------------------------------------------------------------------



-------------------------------------------------------------------------------
-- función PL/pgSQL que devuelve el número de filas de una tabla:
-------------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION fn_cantidad_registros (tabla_nombre TEXT)
RETURNS INT AS $$
DECLARE
	cantidad_registros INT;
BEGIN
	EXECUTE 'SELECT count(*) FROM ' || tabla_nombre INTO cantidad_registros;
	RETURN cantidad_registros;
END
$$ LANGUAGE plpgsql;

SELECT fn_cantidad_registros('clientes')

DROP FUNCTION fn_cantidad_registros(text)

-------------------------------------------------------------------------------
-------------------------------------------------------------------------------



-------------------------------------------------------------------------------
-- Ejemplo de una función de consulta de ventas en PostgreSQL. Supongamos que 
-- tienes una tabla llamada "ventas" que contiene información sobre las ventas 
-- realizadas en una tienda, con las columnas: 
-- "id_venta", "fecha", "producto", "cantidad" y "monto".
-- 
-- El objetivo de la función es obtener la cantidad total de ventas y el monto 
-- total de ventas para un rango de fechas específico. La función toma dos 
-- parámetros: la fecha de inicio (fecha_inicio) y la fecha de fin (fecha_fin). 
-- Luego, realiza la consulta y devuelve los resultados como un conjunto de filas.
-------------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION consulta_ventas(fecha_inicio DATE, fecha_fin DATE)
RETURNS TABLE(total_ventas INTEGER, monto_total NUMERIC) AS $$
BEGIN
  RETURN QUERY
  SELECT
    SUM(cantidad) AS total_ventas,
    SUM(monto) AS monto_total
  FROM
    ventas
  WHERE
    fecha BETWEEN fecha_inicio AND fecha_fin;
END;
$$ LANGUAGE plpgsql;

-------------------------------------------------------------------------------
-- En este ejemplo, hemos definido la función consulta_ventas, que acepta dos 
-- parámetros de tipo DATE: fecha_inicio y fecha_fin. La función utiliza un 
-- bloque plpgsql para realizar una consulta en la tabla "ventas", utilizando 
-- la cláusula WHERE para filtrar los registros con fechas dentro del rango 
-- especificado.
--
-- El resultado de la consulta se devuelve como un conjunto de filas utilizando 
-- la cláusula RETURN QUERY, con dos columnas: total_ventas que contiene la 
-- cantidad total de ventas y monto_total que contiene el monto total de ventas 
-- dentro del rango de fechas.
--
-- Para utilizar la función y obtener los resultados de las ventas, 
-- puedes hacer lo siguiente:
-------------------------------------------------------------------------------

SELECT * FROM consulta_ventas('2023-01-01', '2023-03-31');

-------------------------------------------------------------------------------
-- Este comando ejecutará la función consulta_ventas y devolverá un conjunto de 
-- filas con la cantidad total de ventas y el monto total de ventas realizadas 
-- entre el 1 de enero de 2023 y el 31 de marzo de 2023. Puedes ajustar las 
-- fechas según tus necesidades para obtener información de ventas para 
-- diferentes períodos de tiempo.
-------------------------------------------------------------------------------

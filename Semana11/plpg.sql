-------------------------------------------------------------------------------
--- ejemplo simple de una función en PL/pgSQL que suma dos números:
-------------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION sumar_numeros(a integer, b integer) RETURNS integer AS $$
BEGIN
  RETURN a + b;
END;
$$ LANGUAGE plpgsql;

SELECT sumar_numeros(5, 7); -- Devolverá 12



-------------------------------------------------------------------------------
---  aplicar un descuento del 10% si el monto de una compra supera los $100, de lo contrario, no aplicar ningún descuento
-------------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION aplicar_descuento(monto_compra numeric) RETURNS numeric AS $$
DECLARE
  monto_con_descuento numeric;
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
--- Ejemplo de provcedimiento almacenado
-------------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE obtener_detalles_contacto(IN cliente_nombre VARCHAR)
LANGUAGE plpgsql
AS $$
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
$$;

CALL obtener_detalles_contacto('NombreCliente');



-------------------------------------------------------------------------------
--- Ejemplo de concatenación en PostgreSQL:
-------------------------------------------------------------------------------

-- Usando el operador ||
SELECT 'Hola' || ' ' || 'Mundo'; -- Devuelve 'Hola Mundo'

-- Usando la función CONCAT
SELECT CONCAT('Hola', ' ', 'Mundo'); -- Devuelve 'Hola Mundo'



-------------------------------------------------------------------------------
--- Crear una función para paginar resultados:
-------------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION paginar_resultados(
  page_number integer,
  page_size integer
) RETURNS SETOF table_name AS $$
DECLARE
  offset_value integer;
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
  FROM table_name
  ORDER BY columna_ordenacion -- Reemplaza "columna_ordenacion" por la columna que desees ordenar
  LIMIT page_size
  OFFSET offset_value;
END;
$$ LANGUAGE plpgsql;

SELECT * FROM paginar_resultados(1, 10); -- Mostrar la primera página con 10 resultados
SELECT * FROM paginar_resultados(2, 10); -- Mostrar la segunda página con 10 resultados



-------------------------------------------------------------------------------
-- Ejemplo 1: Ciclo WHILE para actualizar registros en una tabla
--
-- Supongamos que tienes una tabla llamada "empleados" con una columna "antiguedad" 
-- que representa la cantidad de años que lleva un empleado trabajando en la empresa. 
-- Queremos aumentar en 1 año la antigüedad de todos los empleados hasta que alcancen 
-- un máximo de 10 años. Utilizaremos un ciclo WHILE para lograr esto:
-------------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE aumentar_antiguedad()
LANGUAGE plpgsql
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
LANGUAGE plpgsql
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

-------------------------------------------------------------------------------
-- En este ejemplo, el procedimiento calcular_suma_acumulada utiliza un ciclo FOR 
-- para recorrer todos los registros de la tabla "ventas" ordenados por fecha. 
-- Luego, dentro de este ciclo, utiliza un ciclo LOOP para calcular la suma 
-- acumulada de ventas para cada día e imprimir el resultado en la consola.
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
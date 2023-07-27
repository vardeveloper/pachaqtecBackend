//Hackaton 11 Fabricio CastillO

Ej1:
CREATE OR REPLACE FUNCTION sumar_enteros (num1 INT, num2 INT) RETURNS INT AS
$$
DECLARE resultado INT;
BEGIN
   resultado := num1 + num2;
  RETURN resultado;
END;
$$
LANGUAGE plpgsql;

Ej2:

CREATE OR REPLACE FUNCTION calcular_area_circulo(radio NUMERIC)
RETURNS NUMERIC AS
$$
DECLARE
  area NUMERIC;
BEGIN
  area := PI() * radio^2;
  RETURN area;
END;
$$
LANGUAGE plpgsql;

Ej3:
CREATE OR REPLACE FUNCTION es_primo(n INT)
RETURNS BOOLEAN AS $$
DECLARE
  i INT;
BEGIN
  IF n <= 1 THEN
    RETURN FALSE;
  END IF;

  FOR i IN 2..(n/2) LOOP
    IF n % i = 0 THEN
      RETURN FALSE;
    END IF;
  END LOOP;

  RETURN TRUE;
END;
$$ LANGUAGE plpgsql;

Ej4:
CREATE OR REPLACE PROCEDURE insertar_empleado(
  p_nombre VARCHAR,
  p_apellido VARCHAR,
  p_puesto VARCHAR,
  p_salario NUMERIC
)
LANGUAGE plpgsql
AS $$
BEGIN
  INSERT INTO empleados (nombre, apellido, puesto, salario)
  VALUES (p_nombre, p_apellido, p_puesto, p_salario);
END;
$$;

Ej5:
CREATE OR REPLACE PROCEDURE actualizar_salario_empleado(
    i_id INT,
    i_nuevo_salario DECIMAL
)
AS
$$
BEGIN
    UPDATE empleados
    SET salario = i_nuevo_salario
    WHERE id = i_id;
    IF FOUND THEN
        RAISE NOTICE 'Salario actualizado correctamente para el empleado con ID %', i_id;
    ELSE
        RAISE EXCEPTION 'No se encontró ningún empleado con el ID proporcionado';
    END IF;
END;
$$
LANGUAGE plpgsql;

Ej6:

CREATE OR REPLACE PROCEDURE eliminar_empleado_por_id(p_id INT)
LANGUAGE plpgsql
AS $$
BEGIN
  DELETE FROM empleados
  WHERE id = p_id;
END;
$$;

Ej7:

CREATE OR REPLACE FUNCTION registrar_fecha_insercion()
RETURNS TRIGGER AS
$$
BEGIN
  NEW.fecha_insercion := NOW();
  RETURN NEW;
END;
$$
LANGUAGE plpgsql;

CREATE TRIGGER tr_registrar_fecha_insercion
BEFORE INSERT ON empleados
FOR EACH ROW
EXECUTE FUNCTION registrar_fecha_insercion();

CALL insertar_empleado(6, 'Juan Perez', 'Analista', 60000.00);

select * from empleados

Ej8 Consultar

Ej9:
CREATE OR REPLACE FUNCTION verificar_antiguedad_empleado()
RETURNS TRIGGER AS
$$
BEGIN
  IF date_part('year', now()) - date_part('year', OLD.fecha_ingreso) >= 5 THEN
    RAISE EXCEPTION 'No se puede eliminar empleados con más de 5 años de antigüedad.';
  END IF;
  RETURN OLD;
END;
$$
LANGUAGE plpgsql;

Ej10:
CREATE OR REPLACE FUNCTION calcular_promedio_salarios()
RETURNS NUMERIC AS
$$
DECLARE
  total_salarios NUMERIC;
  cantidad_empleados INTEGER;
  promedio NUMERIC;
BEGIN
  SELECT SUM(salario), COUNT(*) INTO total_salarios, cantidad_empleados
  FROM empleados;

  IF cantidad_empleados > 0 THEN
    promedio := total_salarios / cantidad_empleados;
    RETURN promedio;
  ELSE
    RETURN NULL;
  END IF;
END;
$$
LANGUAGE plpgsql;

Ej11:

CREATE OR REPLACE FUNCTION obtener_nombre_completo(p_id INT)
RETURNS VARCHAR AS
$$
DECLARE
  nombre_completo VARCHAR;
BEGIN
  SELECT CONCAT(nombre, ' ', apellido) INTO nombre_completo
  FROM empleados
  WHERE id = p_id;

  RETURN nombre_completo;
END;
$$
LANGUAGE plpgsql;

Ej12:

CREATE OR REPLACE PROCEDURE asignar_nuevo_jefe(
  p_departamento_id INT,
  p_nuevo_jefe_id INT
)
LANGUAGE plpgsql
AS $$
BEGIN
  BEGIN;
  UPDATE departamentos
  SET jefe_id = p_nuevo_jefe_id
  WHERE id = p_departamento_id;

  UPDATE empleados
  SET jefe_id = p_nuevo_jefe_id
  WHERE departamento_id = p_departamento_id;
  
  COMMIT;
END;
$$;

Ej13:
CREATE OR REPLACE PROCEDURE aumentar_salario_departamento(
  p_departamento_id INT,
  p_aumento_porcentaje NUMERIC
)
LANGUAGE plpgsql
AS $$
BEGIN
  UPDATE empleados
  SET salario = salario * (1 + p_aumento_porcentaje / 100)
  WHERE departamento_id = p_departamento_id;
END;
$$;

Ej14

CREATE OR REPLACE PROCEDURE eliminar_registros_con_confirmacion(
  p_nombre_tabla TEXT
)
LANGUAGE plpgsql
AS $$
DECLARE
  confirmacion TEXT;
BEGIN
  RAISE NOTICE '¡ADVERTENCIA! Esta operación eliminará todos los registros de la tabla %.', p_nombre_tabla;
  RAISE NOTICE 'Para confirmar la eliminación, escriba "SI" en mayúsculas:';
    PERFORM pg_sleep(0.5); -- Esperar un poco para dar tiempo de leer el mensaje
  EXECUTE 'SELECT current_setting(''client_min_messages'')' INTO confirmacion;
  
  IF confirmacion = 'SI' THEN
    EXECUTE 'DELETE FROM ' || p_nombre_tabla;
    RAISE NOTICE 'Se han eliminado todos los registros de la tabla %.', p_nombre_tabla;
  ELSE
    RAISE NOTICE 'Operación de eliminación cancelada. No se han realizado cambios en la tabla %.', p_nombre_tabla;
  END IF;
END;
$$;

Ej15
CREATE OR REPLACE FUNCTION obtener_empleados_por_salario_desc()
RETURNS TABLE (
  id INT,
  nombre VARCHAR,
  apellido VARCHAR,
  salario NUMERIC
)
AS $$
BEGIN
  RETURN QUERY
  SELECT id, nombre, apellido, salario
  FROM empleados
  ORDER BY salario DESC;
END;
$$
LANGUAGE plpgsql;

Ej16

CREATE OR REPLACE FUNCTION obtener_cantidad_empleados_por_departamento()
RETURNS TABLE (
  departamento_id INT,
  cantidad_empleados INT
)
AS $$
BEGIN
  RETURN QUERY
  SELECT departamento_id, COUNT(*) AS cantidad_empleados
  FROM empleados
  GROUP BY departamento_id;
END;
$$
LANGUAGE plpgsql;

Ej17

CREATE OR REPLACE FUNCTION obtener_salario_maximo()
RETURNS NUMERIC
AS $$
DECLARE
  salario_max NUMERIC;
BEGIN
  SELECT MAX(salario) INTO salario_max
  FROM empleados;
  
  RETURN salario_max;
END;
$$
LANGUAGE plpgsql;

Ej18

CREATE TABLE IF NOT EXISTS empleados (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR,
  apellido VARCHAR,
  fecha_modificacion TIMESTAMP
);

-- Crear una función que será llamada por el trigger.
CREATE OR REPLACE FUNCTION actualizar_fecha_modificacion()
RETURNS TRIGGER AS
$$
BEGIN
  NEW.fecha_modificacion := NOW();
  RETURN NEW;
END;
$$
LANGUAGE plpgsql;

-- Crear el trigger en la tabla "empleados".
CREATE TRIGGER actualizar_fecha_modificacion_trigger
BEFORE UPDATE ON empleados
FOR EACH ROW
EXECUTE FUNCTION actualizar_fecha_modificacion();

Ej19

-- Crear la tabla "empleados" (si no existe)
CREATE TABLE IF NOT EXISTS empleados (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR,
  apellido VARCHAR
);

-- Crear una función que será llamada por el trigger.
CREATE OR REPLACE FUNCTION evitar_registros_duplicados()
RETURNS TRIGGER AS
$$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM empleados
    WHERE nombre = NEW.nombre AND apellido = NEW.apellido
  ) THEN
    RAISE EXCEPTION 'No se pueden insertar registros duplicados.';
  END IF;
  
  RETURN NEW;
END;
$$
LANGUAGE plpgsql;

-- Crear el trigger en la tabla "empleados".
CREATE TRIGGER evitar_registros_duplicados_trigger
BEFORE INSERT ON empleados
FOR EACH ROW
EXECUTE FUNCTION evitar_registros_duplicados();

Ej20

-- Crear la tabla "empleados" (si no existe)
CREATE TABLE IF NOT EXISTS empleados (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR,
  apellido VARCHAR
);

-- Crear la tabla de auditoría "auditoria_empleados" (si no existe)
CREATE TABLE IF NOT EXISTS auditoria_empleados (
  id SERIAL PRIMARY KEY,
  empleado_id INT,
  nombre VARCHAR,
  apellido VARCHAR,
  tipo_operacion VARCHAR,
  fecha_hora TIMESTAMP
);

-- Crear una función que será llamada por el trigger.
CREATE OR REPLACE FUNCTION registrar_cambios_auditoria()
RETURNS TRIGGER AS
$$
BEGIN
  IF TG_OP = 'INSERT' THEN
    INSERT INTO auditoria_empleados (empleado_id, nombre, apellido, tipo_operacion, fecha_hora)
    VALUES (NEW.id, NEW.nombre, NEW.apellido, 'INSERT', NOW());
    RETURN NEW;
  ELSIF TG_OP = 'UPDATE' THEN
    INSERT INTO auditoria_empleados (empleado_id, nombre, apellido, tipo_operacion, fecha_hora)
    VALUES (OLD.id, NEW.nombre, NEW.apellido, 'UPDATE', NOW());
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    INSERT INTO auditoria_empleados (empleado_id, nombre, apellido, tipo_operacion, fecha_hora)
    VALUES (OLD.id, OLD.nombre, OLD.apellido, 'DELETE', NOW());
    RETURN OLD;
  END IF;
  
  RETURN NULL;
END;
$$
LANGUAGE plpgsql;

-- Crear el trigger en la tabla "empleados".
CREATE TRIGGER auditoria_empleados_trigger
AFTER INSERT OR UPDATE OR DELETE ON empleados
FOR EACH ROW
EXECUTE FUNCTION registrar_cambios_auditoria();


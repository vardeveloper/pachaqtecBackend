/*1. Función para sumar dos números enteros.*/
CREATE OR REPLACE FUNCTION sumar_2_numeros(a integer,b integer) RETURNS integer AS $$
BEGIN
  return a + b;
END
$$ LANGUAGE plpgsql;

SELECT sumar_2_numeros(3,4)


/*2. Función para calcular el área de un círculo.*/
CREATE OR REPLACE FUNCTION area_circulo(r integer) RETURNS float AS $$
DECLARE
	resultado float;
BEGIN
	resultado := PI()*r*r;
  return resultado;
END
$$ LANGUAGE plpgsql;

SELECT area_circulo(3)

/*3. Función para verificar si un número es primo.*/
CREATE OR REPLACE FUNCTION numero_primo(n integer) RETURNS text AS $$
DECLARE
  contador INT := 2;
  mitad INT := n/2 + 1;
  residuo INT ;
  primo boolean := true;
  mensaje text := 'Si es un numero primo';
BEGIN
  WHILE contador <= mitad LOOP
    residuo := n % contador;
	IF residuo = 0 THEN
      primo := false;
	  mensaje := 'No es un numero primo';
	  EXIT; -- Condición de salida del ciclo
    END IF;
	contador := contador + 1;
  END LOOP;
  
  RETURN mensaje;
END
$$ LANGUAGE plpgsql;

SELECT numero_primo(7)


/*4. Procedimiento para insertar un nuevo empleado en la tabla "empleados".*/
CREATE OR REPLACE PROCEDURE insertar_empleado(emp_id integer, 
											  emp_nombre text, 
											  emp_apellido text, 
											  emp_salario text)
LANGUAGE plpgsql
AS $$
BEGIN
  INSERT INTO empleado(id, first_name,last_name,salario)
  VALUES (emp_id, emp_nombre, emp_apellido, emp_salario);
END;
$$;

CALL insertar_empleado(21, 'Juan', 'Perez', '1500')


/*5. Procedimiento para actualizar el salario de un empleado en la tabla "empleados" por ID.*/
CREATE OR REPLACE PROCEDURE actualizar_salario(emp_id integer, 
											  emp_salario text)
LANGUAGE plpgsql
AS $$
BEGIN
  UPDATE empleado
  SET salario = emp_salario
  WHERE id = emp_id;
END;
$$;

CALL actualizar_salario(21, '1800')

select * from empleado order by id

/*6. Procedimiento para eliminar un empleado de la tabla "empleados" por ID.*/
CREATE OR REPLACE PROCEDURE eliminar_empleado(emp_id integer)
LANGUAGE plpgsql
AS $$
BEGIN
  DELETE FROM empleado where id=emp_id;
END;
$$;

CALL eliminar_empleado(21)

/*7. Trigger para registrar la fecha de inserción de un nuevo empleado en la tabla "empleados"*/
ALTER TABLE empleado
ADD COLUMN fecha_insercion timestamp;

CREATE OR REPLACE FUNCTION fecha_insercion_empleado()
RETURNS TRIGGER AS $$
BEGIN
  NEW.fecha_insercion := NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER agregar_fecha
BEFORE INSERT
ON empleado
FOR EACH ROW
EXECUTE FUNCTION fecha_insercion_empleado();

CALL insertar_empleado(21, 'Juan', 'Perez', '1500');

DROP TRIGGER IF EXISTS agregar_fecha ON empleado;

/*8. Trigger para actualizar automáticamente el salario de un empleado después de una actualización en la tabla "empleados".*/
CREATE OR REPLACE FUNCTION actualizar_salario_empleado()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE empleado
  SET salario = NEW.salario + 1000;
  where id = NEW.id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_actualizar_salario_empleado
AFTER UPDATE
ON empleado
FOR EACH ROW
EXECUTE FUNCTION actualizar_salario_empleado();

DROP TRIGGER IF EXISTS trigger_actualizar_salario_empleado ON empleado;


/*9. Trigger para evitar la eliminación de empleados con más de 5 años de antigüedad.*/
CREATE OR REPLACE FUNCTION eliminar_empleado()
RETURNS TRIGGER AS $$
DECLARE
 actual numeric := EXTRACT(YEAR FROM NOW());
 anio_insercion numeric := EXTRACT(YEAR FROM OLD.fecha_insercion);
BEGIN
  IF (actual - anio_insercion) > 5 THEN
   RAISE EXCEPTION 'Empleado con mas de 5 años de antiguedad';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_eliminar_empleado
BEFORE DELETE
ON empleado
FOR EACH ROW
EXECUTE FUNCTION eliminar_empleado();

CALL eliminar_empleado(21);
CALL insertar_empleado(21, 'Juan', 'Perez', '1500');
select * from empleado order by id
select EXTRACT(YEAR FROM fecha_insercion) from empleado where id = 21

/*10. Función para calcular el promedio de los salarios de todos los empleados.*/
CREATE OR REPLACE FUNCTION promedio_salario() RETURNS numeric AS $$
DECLARE
  Promedio NUMERIC;
BEGIN
  SELECT AVG(CAST(salario AS INTEGER)) INTO Promedio from empleado;
  RETURN Promedio;
END
$$ LANGUAGE plpgsql;

SELECT promedio_salario();


/*11. Función para obtener el nombre completo de un empleado concatenando nombre y apellido.*/
CREATE OR REPLACE FUNCTION Nombre_completo(id_emp integer) RETURNS text AS $$
DECLARE
  Nombre_concatenado text;
BEGIN
  SELECT CONCAT(first_name,' ',last_name) INTO Nombre_concatenado from empleado where id = id_emp;
  RETURN Nombre_concatenado;
END
$$ LANGUAGE plpgsql;

SELECT Nombre_completo(21);

/*12. Procedimiento para asignar un nuevo jefe a un departamento y actualizar los empleados afectados.*/
CREATE OR REPLACE PROCEDURE asignar_nuevo_jefe(id_departamento INTEGER, id_nuevo_jefe INTEGER)
LANGUAGE plpgsql
AS $$
BEGIN
  UPDATE departamentos
  SET jefe_id = id_nuevo_jefe
  WHERE id = id_departamento;

  UPDATE empleado
  SET jefe_id = id_nuevo_jefe
  WHERE departamento_id = id_departamento;
END;
$$;

CALL asignar_nuevo_jefe(3, 2)

/*13. Procedimiento para aumentar el salario de todos los empleados en un departamento.*/
CREATE OR REPLACE PROCEDURE aumentar_salario(id_departamento INTEGER, salario_extra INTEGER)
LANGUAGE plpgsql
AS $$
BEGIN
  UPDATE empleado
  SET salario = salario + salario_extra
  WHERE departamento_id = id_departamento;
END;
$$;

CALL aumentar_salario(3, 500)


/*14. Procedimiento para eliminar todos los registros de una tabla (con confirmación).*/
CREATE OR REPLACE PROCEDURE eliminar_registros_tabla(nombre_tabla TEXT)
LANGUAGE plpgsql
AS $$
DECLARE
  opcion TEXT;
BEGIN
  RAISE NOTICE '¡ADVERTENCIA! Esta operación eliminará todos los registros de la tabla %.', nombre_tabla;
  RAISE NOTICE 'Para confirmar la eliminación, escriba "SI" en mayúsculas:';
    PERFORM pg_sleep(5); -- Esperar un poco para dar tiempo de leer el mensaje
  EXECUTE 'SELECT current_setting(''client_min_messages'')' INTO opcion;
  
  IF opcion = 'SI' THEN
    EXECUTE 'DELETE FROM ' || nombre_tabla;
    RAISE NOTICE 'Se han eliminado todos los registros de la tabla %.', p_nombre_tabla;
  ELSE
    RAISE NOTICE 'No se ha eliminado ningun registro de la tabla %.', nombre_tabla;
  END IF;
END;
$$;

CALL eliminar_registros_tabla('Producto')
/*15. Función para obtener una lista de empleados ordenados por salario de forma descendente.*/
CREATE OR REPLACE FUNCTION obtener_empleados_por_salario_desc()
RETURNS TABLE (emp_id INTEGER, Nombre TEXT, Apellido TEXT, Salario_emp character varying(100)) 
AS $$
BEGIN
  RETURN QUERY
  SELECT id as emp_id, first_name as Nombre , last_name as Apellido, salario as Salario_emp
  FROM empleado
  ORDER BY salario DESC;
END;
$$
LANGUAGE plpgsql;

SELECT obtener_empleados_por_salario_desc()

SELECT id as emp_id, first_name as Nombre , last_name as Apellido, salario as Salario_emp
  FROM empleado
  ORDER BY salario DESC;

/*16. Función para obtener la cantidad de empleados por departamento.*/
CREATE OR REPLACE FUNCTION cantidad_empleados_departamento()
RETURNS TABLE (id_departamento_emp INTEGER, cantidad_empleados BIGINT)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT id_departamento, COUNT(*) as cantidad_empleados
  FROM empleado
  GROUP BY id_departamento;
END;
$$;

DROP FUNCTION cantidad_empleados_departamento()

SELECT * from cantidad_empleados_departamento();


/*17. Función para obtener el salario máximo de todos los empleados.*/
CREATE OR REPLACE FUNCTION salario_maximo() RETURNS INTEGER AS $$
DECLARE
  salario_maximo INTEGER;
BEGIN
  SELECT MAX(CAST(salario AS INTEGER)) INTO salario_maximo from empleado;
  RETURN salario_maximo;
END
$$ LANGUAGE plpgsql;

SELECT salario_maximo();

/*18. Trigger para actualizar automáticamente la fecha de modificación de un registro en una tabla.*/
CREATE OR REPLACE FUNCTION actualizar_fecha_modificacion()
RETURNS TRIGGER AS $$
BEGIN
  NEW.fecha_modificacion := now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_actualizar_fecha_modificacion
BEFORE UPDATE ON empleados
FOR EACH ROW
EXECUTE FUNCTION actualizar_fecha_modificacion();


/*19. Trigger para evitar que se inserten registros duplicados en una tabla.*/
CREATE OR REPLACE FUNCTION evitar_registros_duplicados()
RETURNS TRIGGER AS
$$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM empleado
    WHERE first_name = NEW.first_name AND last_name = NEW.last_name
  ) THEN
    RAISE EXCEPTION 'No se pueden insertar registros duplicados.';
  END IF;
  
  RETURN NEW;
END;
$$
LANGUAGE plpgsql;

CREATE TRIGGER trigger_evitar_registros_duplicados
BEFORE INSERT ON empleado
FOR EACH ROW
EXECUTE FUNCTION evitar_registros_duplicados();



/*20. Trigger para mantener un registro de los cambios realizados en una tabla en una tabla de auditoría.*/
CREATE OR REPLACE FUNCTION registrar_cambios()
RETURNS TRIGGER AS $$
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
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_registrar_cambios
AFTER UPDATE OR UPDATE OR DELETE ON empleado
FOR EACH ROW
EXECUTE FUNCTION registrar_cambios();





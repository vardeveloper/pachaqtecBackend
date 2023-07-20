# POSTGRES SQL

## PROGRAMACION PROCEDIMENTAL

### Lenguaje procedural y funciones

- En PostgreSQL, se puede escribir código PL/pgSQL, que es un lenguaje procedural específico de PostgreSQL, para crear funciones almacenadas y procedimientos. PL/pgSQL es uno de los varios lenguajes procedurales admitidos por PostgreSQL, y se considera el más popular y ampliamente utilizado.

- Las funciones en PostgreSQL son similares a las funciones en otros lenguajes de programación. Permiten encapsular lógica compleja dentro de un bloque de código y se pueden invocar desde cualquier parte del código o desde otras consultas SQL. Las funciones en PostgreSQL pueden ser funciones puras o funciones que devuelven un conjunto de resultados (también conocidas como funciones de tabla).

### Sintaxis

```sql
CREATE [OR REPLACE] FUNCTION function_name ([parameter_name [IN | OUT | INOUT] data_type [, ...] ])
RETURNS [data_type] AS
$$
BEGIN
   -- function body
   RETURN expression;
END
$$ LANGUAGE plpgsql;
```

Los siguientes son los diversos componentes de la sintaxis de una función:

- **CREATE [OR REPLACE] FUNCTION:** Esta declaración crea o reemplaza una función.
- **function_name:** El nombre de la función.
- **[parameter_name [IN | OUT | INOUT] data_type [, ...] ]:** Los parámetros de la función. Cada parámetro debe tener un nombre, un tipo de datos y una dirección de paso.
- **RETURNS [data_type]:** El tipo de datos devuelto por la función.
- **AS:** Esta palabra clave separa la declaración de la función del cuerpo de la función.
- **$$:** Estos delimitadores rodean el cuerpo de la función.
- **LANGUAGE plpgsql:** El lenguaje que se utiliza para escribir la función.
- **BEGIN:** Esta palabra clave marca el comienzo del cuerpo de la función.
- **-- function body:** El cuerpo de la función es un bloque de código que realiza la tarea de la función.
- **RETURN expression;:** Esta sentencia devuelve el valor de la función.
- **END:** Esta palabra clave marca el final del cuerpo de la función.

### Cuando usar procedimientos almacenados y concatenación

#### Procedimientos almacenados

- Los procedimientos almacenados (también conocidos como "stored procedures") son bloques de código que se almacenan en la base de datos y pueden ser invocados para realizar operaciones específicas. Estos procedimientos contienen lógica de negocio y se utilizan para encapsular tareas complejas que se deben realizar dentro de la base de datos.

#### Sintaxis

```sql
CREATE [OR REPLACE] PROCEDURE nombre_procedimiento([parámetros])
LANGUAGE lenguaje
AS $$
-- Cuerpo del procedimiento
BEGIN
  -- Lógica del procedimiento
  -- Código SQL y otras operaciones
END;
$$;
```

A continuación, explicaremos cada parte de la sintaxis:

- **CREATE [OR REPLACE] PROCEDURE:** Indica que estamos creando un nuevo procedimiento almacenado en la base de datos. La cláusula OR REPLACE es opcional y reemplazará el procedimiento si ya existe un procedimiento con el mismo nombre.

- **nombre_procedimiento:** Es el nombre único del procedimiento que estás creando. Debes seguir las reglas de nomenclatura de PostgreSQL para los nombres de objetos.

- **[parámetros]:** Son los parámetros de entrada del procedimiento, separados por comas. Cada parámetro debe tener un nombre y un tipo de datos.

- **LANGUAGE lenguaje:** Indica el lenguaje en el que está escrito el procedimiento. Por ejemplo, plpgsql para procedimientos escritos en PL/pgSQL (el lenguaje procedural de PostgreSQL).

- **AS $$ ... END;:** Es el bloque de código que contiene la lógica del procedimiento. Aquí es donde defines las operaciones y cálculos que deseas realizar.

#### Cuándo usar procedimientos almacenados

- Cuando tienes operaciones complejas que involucran múltiples consultas o transacciones en la base de datos.
- Cuando deseas mejorar el rendimiento, ya que ejecutar un procedimiento almacenado requiere menos comunicación con el servidor que enviar múltiples consultas desde una aplicación cliente.
- Cuando necesitas compartir lógica de negocio entre múltiples clientes o aplicaciones, ya que el procedimiento almacenado se convierte en una interfaz reutilizable.

#### Concatenación

- La concatenación es una operación que consiste en combinar cadenas de texto para formar una cadena más larga. En PostgreSQL, se puede realizar la concatenación utilizando el operador || o la función CONCAT.

#### Cuándo usar concatenación

- Cuando necesitas combinar múltiples valores o cadenas de texto en una sola cadena para mostrar o almacenar datos.
- Cuando estás construyendo consultas dinámicas en las que necesitas crear dinámicamente partes de la consulta como nombres de tablas, columnas o condiciones WHERE.
- Cuando deseas formatear o presentar datos en una forma específica.

```sql
--- Ejemplo de concatenación en PostgreSQL:

-- Usando el operador ||
SELECT 'Hola' || ' ' || 'Mundo'; -- Devuelve 'Hola Mundo'

-- Usando la función CONCAT
SELECT CONCAT('Hola', ' ', 'Mundo'); -- Devuelve 'Hola Mundo'
```

### Diferencias entre un procedimiento y una función

1. **Valor de retorno:**

    - **Función:** Devuelve un valor y, por lo tanto, se puede usar en una consulta SQL como una expresión que produce un resultado.
    - **Procedimiento:** No tiene un valor de retorno específico, aunque puede utilizar parámetros de salida para enviar resultados o información de estado.

2. **Uso en consultas SQL:**
    - **Función:** Puede utilizarse en cualquier lugar donde se permita una expresión en una consulta SQL, como en el SELECT, WHERE, ORDER BY, etc.
    - **Procedimiento:** No se puede utilizar directamente en una consulta SQL; se llama de forma explícita y puede realizar operaciones internas en la base de datos.

3. **Comportamiento:**
    - **Función:** Se utiliza para realizar un cálculo o consulta y devuelve un valor que puede ser útil en otras partes del código.
    - **Procedimiento:** Se utiliza para realizar una serie de acciones o tareas que pueden tener efectos secundarios o afectar el estado de la base de datos, pero no devuelve un valor específico.

4. **Invocación:**
    - **Función:** Se invoca como una expresión dentro de una consulta SQL o en una instrucción PL/pgSQL utilizando la notación SELECT.
    - **Procedimiento:** Se invoca como una instrucción PL/pgSQL utilizando la notación CALL o simplemente escribiendo su nombre seguido de parámetros.

5. **Uso de transacciones:**
    - **Función:** Está vinculada a la transacción que la invoca, lo que significa que cualquier cambio en la base de datos realizado por la función se confirmará o revertirá junto con la transacción.
    - **Procedimiento:** Puede ejecutar múltiples instrucciones y afectar la base de datos, pero no está vinculado directamente a la transacción que lo invoca, lo que permite más flexibilidad en el control de las transacciones.

### Cuando usar una función o procedimiento almacenado

La elección entre utilizar una función o un procedimiento almacenado en PostgreSQL (o en cualquier sistema de gestión de bases de datos) depende de los requisitos específicos y del propósito para el cual se está implementando la lógica. A continuación, se presentan algunas consideraciones que pueden ayudarte a decidir cuándo usar una función o un procedimiento almacenado:

#### Cuándo usar una función

1. **Cálculos y consultas:** Las funciones son ideales para encapsular cálculos complejos o consultas que devuelven un valor. Puedes utilizar una función para realizar operaciones matemáticas, transformaciones de datos o combinaciones de múltiples valores en un resultado.

2. **Expresiones SQL reutilizables:** Si tienes una consulta SQL que se repite en varias partes de tu código o en diferentes aplicaciones, puedes encapsular esa consulta en una función para reutilizarla fácilmente y mantener un código más limpio y mantenible.

3. **Integración con consultas:** Las funciones se pueden usar en consultas SQL como expresiones, lo que permite obtener resultados calculados directamente dentro de la consulta. Esto es útil cuando necesitas realizar un cálculo o transformación sobre los datos antes de obtener el resultado final.

4. **Resultado esperado:** Cuando necesitas obtener un valor específico como resultado de una operación o cálculo, una función es más adecuada, ya que puede devolver un valor que puedes utilizar en otras partes de tu código o en la consulta SQL.

#### Cuándo usar un procedimiento almacenado

1. **Tareas de manipulación de datos:** Los procedimientos almacenados son útiles para realizar tareas de manipulación de datos más complejas, como insertar, actualizar o eliminar registros en una o varias tablas.

2. **Lógica de negocio compleja:** Cuando tienes una lógica de negocio que involucra múltiples pasos y transacciones, un procedimiento almacenado puede ser más adecuado. Puedes usarlo para mantener la integridad de los datos y realizar múltiples operaciones de forma atómica.

3. **Efectos secundarios:** Si la tarea que estás realizando tiene efectos secundarios, como envío de correos electrónicos, registro de auditoría o actualización de múltiples tablas, un procedimiento almacenado es más apropiado para asegurar que todas las acciones se realicen de manera consistente.

4. **Transacciones y control de seguridad:** Los procedimientos almacenados pueden ser útiles para administrar transacciones y controlar el acceso y seguridad en tareas específicas.

En general, si tu objetivo es realizar cálculos o consultas que devuelvan un valor específico, una función puede ser la mejor opción. Si estás realizando tareas de manipulación de datos más complejas o efectos secundarios, un procedimiento almacenado es más adecuado. A menudo, puedes combinar el uso de funciones y procedimientos almacenados para lograr tus objetivos de manera más eficiente y organizada.

### Tipos de datos que acepta PostgreSQL

#### Números enteros

- **smallint**: Número entero de 2 bytes (rango aproximado de -32,768 a 32,767).
- **integer**: Número entero de 4 bytes (rango aproximado de -2,147,483,648 a 2,147,483,647).
- **bigint**: Número entero de 8 bytes (rango aproximado de -9,223,372,036,854,775,808 a 9,223,372,036,854,775,807).

#### Números de punto flotante

- **real**: Número de punto flotante de 4 bytes (precisión de 6 decimales).
- **double precision**: Número de punto flotante de 8 bytes (precisión de 15 decimales).

#### Números decimales de precisión arbitraria

- **numeric(precision, scale)**: Número decimal con precisión y escala especificadas.

#### Texto y caracteres

- **char(n)**: Cadena de caracteres de longitud fija.
- **varchar(n)**: Cadena de caracteres de longitud variable con límite de n caracteres.
- **text**: Cadena de caracteres de longitud variable sin límite.

#### Fecha y hora

- **date**: Fecha (formato 'YYYY-MM-DD').
- **time**: Hora del día sin zona horaria (formato 'HH:MI:SS').
- **timestamp**: Fecha y hora (formato 'YYYY-MM-DD HH:MI:SS').
- **timestamp with time zone**: Fecha y hora con zona horaria.
- **interval**: Intervalo de tiempo.

#### Booleanos

- **boolean**: Puede ser "true", "false" o "NULL".

#### Datos binarios

- **bytea**: Datos binarios en formato hexadecimal.

#### Enumeraciones

- **enum**: Tipo de datos que representa un conjunto de valores permitidos.

#### Arreglos

- **integer[], text[], etc.**: Arreglos de valores enteros, cadenas, etc.

#### Tipos compuestos (registro)

- **row**: Tipo de datos que representa una fila con campos heterogéneos.

### Ciclos While y Loop dentro de funciones

#### Ciclo WHILE

El ciclo WHILE se utiliza para repetir una secuencia de acciones mientras se cumple una condición específica. En PostgreSQL, podemos implementar un ciclo WHILE utilizando la estructura de control LOOP junto con una condición que se evalúa en cada iteración.

```sql
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
```

En este ejemplo, la función ejemplo_while utiliza un ciclo WHILE para imprimir un mensaje en la consola durante 5 iteraciones. La variable contador se inicializa en 1 y se incrementa en cada iteración hasta que la condición contador <= 5 se cumple.

#### Ciclo LOOP

El ciclo LOOP se utiliza para repetir una secuencia de acciones indefinidamente hasta que se alcance una condición específica que termine el ciclo. Podemos utilizar un ciclo LOOP con una estructura IF para definir una condición de salida.

```sql
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
```

En este ejemplo, la función ejemplo_loop utiliza un ciclo LOOP para imprimir un mensaje en la consola hasta que contador sea mayor que 5. En cada iteración, la variable contador se incrementa, y cuando se cumple la condición contador > 5, el ciclo se termina utilizando la instrucción EXIT.

#### Borrar funciones

En caso la función tenga parametros de entrada, se debe agregar solo los tipos de datos de cada parametro separado por comas.

```sql
DROP FUNCTION nombre_funcion([tipo_dato, ...])
```

### Ciclos While y Loop en procedimientos almacenados

#### Ciclo WHILE

```sql
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
```

En este procedimiento almacenado llamado ejemplo_while, se utiliza un ciclo WHILE para imprimir un mensaje en la consola durante 5 iteraciones. La variable contador se inicializa en 1 y se incrementa en cada iteración hasta que la condición contador <= 5 se cumple.

#### Ciclo LOOP

```sql
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
```

En este procedimiento almacenado llamado ejemplo_loop, se utiliza un ciclo LOOP para imprimir un mensaje en la consola hasta que contador sea mayor que 5. En cada iteración, la variable contador se incrementa, y cuando se cumple la condición contador > 5, el ciclo se termina utilizando la instrucción EXIT.

#### Borrar procedimientos

En caso el procedimiento tenga parametros de entrada, se debe agregar solo los tipos de datos de cada parametro separado por comas.

```sql
DROP PROCEDURE nombre_procedimiento([tipo_dato, ...])
```

## TRIGGERS

### ¿Qué son Triggers?

Los triggers, también conocidos como disparadores, son objetos de base de datos que se activan automáticamente en respuesta a eventos específicos ocurridos en la base de datos. Un trigger se asocia a una tabla o vista y se dispara automáticamente cuando se ejecutan ciertas operaciones (INSERT, UPDATE, DELETE) en esa tabla o vista.

Los triggers son una parte importante de la funcionalidad avanzada de las bases de datos, ya que permiten automatizar acciones y mantener la integridad de los datos. Se utilizan para realizar acciones adicionales, como mantener registros de auditoría, aplicar reglas de negocio, mantener consistencia en los datos o realizar notificaciones en tiempo real.

Características de los triggers:

1. **Eventos desencadenadores**: Los triggers se pueden activar en respuesta a eventos específicos, como INSERT, UPDATE o DELETE en una tabla o vista.

2. **Momento de activación:** Un trigger puede ser un trigger "BEFORE" (antes de que ocurra el evento) o "AFTER" (después de que ocurra el evento). Los triggers "BEFORE" pueden influir en los datos antes de que se realice la operación, mientras que los triggers "AFTER" pueden actuar sobre los datos después de que se haya realizado la operación.

3. **Eventos por fila o por sentencia:** Los triggers pueden activarse por fila (fila por fila) o por sentencia (una vez para toda la operación). Los triggers "FOR EACH ROW" se activan por fila, mientras que los triggers "FOR EACH STATEMENT" se activan una vez para toda la operación.

4. **Acciones y lógica:** Un trigger puede contener una lógica compleja que realice operaciones adicionales, como insertar registros en otras tablas, actualizar datos, lanzar excepciones, etc.

5. **Control de flujo:** Los triggers pueden utilizar condiciones y estructuras de control para determinar qué acciones realizar en función de ciertas condiciones.

6. **Desencadenadores anidados:** Algunos sistemas de gestión de bases de datos permiten la creación de triggers anidados, lo que significa que un trigger puede activar otro trigger.

Los triggers se utilizan para mantener la integridad de los datos, aplicar reglas de negocio y automatizar acciones en la base de datos. Sin embargo, deben utilizarse con cuidado, ya que pueden tener un impacto significativo en el rendimiento y en la complejidad del sistema. Por lo tanto, es importante diseñar y probar los triggers cuidadosamente para asegurarse de que cumplan con los requisitos del sistema sin afectar negativamente su rendimiento.

### Sintaxis

```sql
CREATE [CONSTRAINT nombre_constraint] TRIGGER nombre_trigger
{BEFORE | AFTER | INSTEAD OF} {eventos}
ON nombre_tabla
[FOR EACH {ROW | STATEMENT}]
[WHEN (condición)]
[EXECUTE FUNCTION nombre_funcion()]
```

A continuación, explicaremos cada parte de la sintaxis:

- **CREATE [CONSTRAINT nombre_constraint] TRIGGER:** Indica que estamos creando un nuevo trigger en la base de datos. La cláusula CONSTRAINT es opcional y se utiliza para asignar un nombre al trigger. Si no se proporciona, PostgreSQL asignará un nombre por defecto.

- **nombre_trigger:** Es el nombre único del trigger que estás creando. Debes seguir las reglas de nomenclatura de PostgreSQL para los nombres de objetos.

- **{BEFORE | AFTER | INSTEAD OF}:** Indica el momento en que el trigger se activará. Puedes utilizar BEFORE para activar el trigger antes de que ocurra el evento, AFTER para activarlo después del evento o INSTEAD OF para activarlo en lugar del evento (en el caso de triggers para vistas).

- **{eventos}:** Son los eventos que activarán el trigger. Puedes utilizar INSERT, UPDATE o DELETE según el tipo de operación que deseas que active el trigger. También puedes combinar múltiples eventos utilizando la sintaxis INSERT OR UPDATE OR DELETE.

- **ON nombre_tabla:** Especifica la tabla en la que se asociará el trigger. El trigger se activará cuando se realicen las operaciones definidas en los eventos en esta tabla.

- **[FOR EACH {ROW | STATEMENT}]:** Especifica si el trigger se ejecutará por cada fila afectada (FOR EACH ROW) o una vez por cada sentencia (FOR EACH STATEMENT). Esta cláusula es opcional y, si no se proporciona, PostgreSQL asume FOR EACH STATEMENT como valor predeterminado.

- **[WHEN (condición)]:** Es opcional y se utiliza para especificar una condición que debe cumplirse para que el trigger se active. La condición se evalúa antes de que se ejecute el trigger.

- **[EXECUTE FUNCTION nombre_funcion()]:** Especifica la función que se ejecutará cuando el trigger se active. Debes proporcionar el nombre de la función que contiene la lógica del trigger. La función puede ser una función de base de datos previamente creada o una función anónima definida directamente en el trigger.

### Borrar un trigger

```sql
DROP TRIGGER [IF EXISTS] nombre_trigger ON nombre_tabla [CASCADE | RESTRICT];
```

A continuación, explicaremos cada parte de la sintaxis:

- **DROP TRIGGER:** Indica que vamos a eliminar un trigger de la base de datos.

- **[IF EXISTS]:** Es opcional y se utiliza para evitar un error si el trigger no existe. Si usas IF EXISTS y el trigger no se encuentra, la sentencia no producirá un error y simplemente se ignorará.

- **nombre_trigger:** Es el nombre del trigger que deseas eliminar.

- **ON nombre_tabla:** Especifica la tabla en la que se encuentra el trigger que deseas eliminar.

- **[CASCADE | RESTRICT]:** También es opcional y determina qué sucede con otros objetos dependientes del trigger. Si usas CASCADE, se eliminarán automáticamente todos los objetos que dependen del trigger. Si usas RESTRICT, la eliminación se cancelará si existen objetos que dependen del trigger.

### Ejemplos

Utilizaremos una tabla llamada "empleados" con las columnas "id" (clave primaria), "nombre", "salario" y "salario_anterior". Crearemos triggers para realizar acciones cuando se inserten o actualicen registros en la tabla "empleados".

#### Trigger para mantener un registro del salario anterior al actualizar el salario

```sql
CREATE OR REPLACE FUNCTION fn_guardar_salario_anterior()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.salario <> OLD.salario THEN
    NEW.salario_anterior := OLD.salario;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_guardar_salario_anterior
BEFORE UPDATE 
ON empleados
FOR EACH ROW
EXECUTE FUNCTION fn_guardar_salario_anterior();
```

En este ejemplo, hemos creado un trigger llamado "trigger_guardar_salario_anterior" que se activa antes de una actualización en la tabla "empleados". Cuando se actualiza el salario de un empleado, el trigger verifica si el nuevo salario es diferente del salario anterior (almacenado en "salario_anterior"). Si es diferente, actualiza el valor de "salario_anterior" con el valor del salario anterior antes de la actualización.

#### Trigger para mantener un registro de auditoría de inserciones en la tabla

```sql
CREATE OR REPLACE FUNCTION fn_auditoria_insert()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO auditoria_empleados (accion, fecha, empleado_id)
  VALUES ('INSERT', NOW(), NEW.id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_auditoria_insert
AFTER INSERT 
ON empleados
FOR EACH ROW
EXECUTE FUNCTION fn_auditoria_insert();
```

En este ejemplo, hemos creado un trigger llamado "trigger_auditoria_insert" que se activa después de una inserción en la tabla "empleados". Cuando se inserta un nuevo registro en la tabla, el trigger inserta un registro de auditoría en otra tabla llamada "auditoria_empleados", registrando la acción (INSERT), la fecha actual y el ID del empleado recién insertado.

### Triggers utilizando cláusulas BEFORE/AFTER y FOR EACH ROW/FOR EACH STATEMENT

#### Trigger BEFORE INSERT para generar un ID automático

```sql
CREATE OR REPLACE FUNCTION fn_generar_id_automatico()
RETURNS TRIGGER AS $$
BEGIN
  NEW.id := nextval('nombre_secuencia_id');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_generar_id_automatico
BEFORE INSERT ON empleados
FOR EACH ROW
EXECUTE FUNCTION fn_generar_id_automatico();
```

En este ejemplo, hemos creado un trigger BEFORE INSERT llamado "trigger_generar_id_automatico". Cuando se inserta un nuevo registro en la tabla "empleados", el trigger se activa antes de la inserción y genera automáticamente un nuevo ID utilizando una secuencia llamada "nombre_secuencia_id".

#### Trigger AFTER DELETE para registrar acciones de eliminación

```sql
CREATE OR REPLACE FUNCTION fn_auditoria_delete()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO auditoria_empleados (accion, fecha, empleado_id)
  VALUES ('DELETE', NOW(), OLD.id);
  RETURN OLD;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_auditoria_delete
AFTER DELETE ON empleados
FOR EACH ROW
EXECUTE FUNCTION fn_auditoria_delete();
```

En este ejemplo, hemos creado un trigger AFTER DELETE llamado "trigger_auditoria_delete". Cuando se elimina un registro de la tabla "empleados", el trigger se activa después de la eliminación y registra una acción de eliminación en la tabla de auditoría "auditoria_empleados", incluyendo la fecha y el ID del empleado eliminado.

#### Trigger FOR EACH STATEMENT para actualizar un campo calculado

```sql
CREATE OR REPLACE FUNCTION fn_actualizar_total_salarios()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE resumen_salarial
  SET total_salarios = (SELECT SUM(salario) FROM empleados);
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_actualizar_total_salarios
AFTER INSERT OR UPDATE OR DELETE ON empleados
FOR EACH STATEMENT
EXECUTE FUNCTION fn_actualizar_total_salarios();
```

En este ejemplo, hemos creado un trigger AFTER INSERT OR UPDATE OR DELETE llamado "trigger_actualizar_total_salarios". Este trigger se activa después de cualquier inserción, actualización o eliminación en la tabla "empleados". En lugar de ejecutarse por cada fila, este trigger se activa una vez para toda la operación. Actualiza el campo "total_salarios" en una tabla llamada "resumen_salarial", que contiene un resumen de salarios de todos los empleados en la tabla "empleados".

## Resources

- [tipos de datos que acepta PostgreSQL!](https://www.postgresql.org/docs/current/datatype.html)
- [mockaroo!](https://mockaroo.com/)

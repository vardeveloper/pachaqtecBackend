# POSTGRES SQL

## PROGRAMACION PROCEDIMENTAL

### Lenguaje procedural y funciones

- En PostgreSQL, se puede escribir código PL/pgSQL, que es un lenguaje procedural específico de PostgreSQL, para crear funciones almacenadas y procedimientos. PL/pgSQL es uno de los varios lenguajes procedurales admitidos por PostgreSQL, y se considera el más popular y ampliamente utilizado.

- Las funciones en PostgreSQL son similares a las funciones en otros lenguajes de programación. Permiten encapsular lógica compleja dentro de un bloque de código y se pueden invocar desde cualquier parte del código o desde otras consultas SQL. Las funciones en PostgreSQL pueden ser funciones puras o funciones que devuelven un conjunto de resultados (también conocidas como funciones de tabla).

### Cuando usar procedimientos almacenados y concatenación

#### Procedimientos almacenados

- Los procedimientos almacenados (también conocidos como "stored procedures") son bloques de código que se almacenan en la base de datos y pueden ser invocados para realizar operaciones específicas. Estos procedimientos contienen lógica de negocio y se utilizan para encapsular tareas complejas que se deben realizar dentro de la base de datos.

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

1. Valor de retorno:

    - Función: Devuelve un valor y, por lo tanto, se puede usar en una consulta SQL como una expresión que produce un resultado.
    - Procedimiento: No tiene un valor de retorno específico, aunque puede utilizar parámetros de salida para enviar resultados o información de estado.

2. Uso en consultas SQL:
    - Función: Puede utilizarse en cualquier lugar donde se permita una expresión en una consulta SQL, como en el SELECT, WHERE, ORDER BY, etc.
    - Procedimiento: No se puede utilizar directamente en una consulta SQL; se llama de forma explícita y puede realizar operaciones internas en la base de datos.

3. Comportamiento:
    - Función: Se utiliza para realizar un cálculo o consulta y devuelve un valor que puede ser útil en otras partes del código.
    - Procedimiento: Se utiliza para realizar una serie de acciones o tareas que pueden tener efectos secundarios o afectar el estado de la base de datos, pero no devuelve un valor específico.

4. Invocación:
    - Función: Se invoca como una expresión dentro de una consulta SQL o en una instrucción PL/pgSQL utilizando la notación SELECT.
    - Procedimiento: Se invoca como una instrucción PL/pgSQL utilizando la notación CALL o simplemente escribiendo su nombre seguido de parámetros.

5. Uso de transacciones:
    - Función: Está vinculada a la transacción que la invoca, lo que significa que cualquier cambio en la base de datos realizado por la función se confirmará o revertirá junto con la transacción.
    - Procedimiento: Puede ejecutar múltiples instrucciones y afectar la base de datos, pero no está vinculado directamente a la transacción que lo invoca, lo que permite más flexibilidad en el control de las transacciones.

### Cuando usar una función o procedimiento almacenado

La elección entre utilizar una función o un procedimiento almacenado en PostgreSQL (o en cualquier sistema de gestión de bases de datos) depende de los requisitos específicos y del propósito para el cual se está implementando la lógica. A continuación, se presentan algunas consideraciones que pueden ayudarte a decidir cuándo usar una función o un procedimiento almacenado:

#### Cuándo usar una función

1. Cálculos y consultas: Las funciones son ideales para encapsular cálculos complejos o consultas que devuelven un valor. Puedes utilizar una función para realizar operaciones matemáticas, transformaciones de datos o combinaciones de múltiples valores en un resultado.

2. Expresiones SQL reutilizables: Si tienes una consulta SQL que se repite en varias partes de tu código o en diferentes aplicaciones, puedes encapsular esa consulta en una función para reutilizarla fácilmente y mantener un código más limpio y mantenible.

3. Integración con consultas: Las funciones se pueden usar en consultas SQL como expresiones, lo que permite obtener resultados calculados directamente dentro de la consulta. Esto es útil cuando necesitas realizar un cálculo o transformación sobre los datos antes de obtener el resultado final.

4. Resultado esperado: Cuando necesitas obtener un valor específico como resultado de una operación o cálculo, una función es más adecuada, ya que puede devolver un valor que puedes utilizar en otras partes de tu código o en la consulta SQL.

#### Cuándo usar un procedimiento almacenado

1. Tareas de manipulación de datos: Los procedimientos almacenados son útiles para realizar tareas de manipulación de datos más complejas, como insertar, actualizar o eliminar registros en una o varias tablas.

2. Lógica de negocio compleja: Cuando tienes una lógica de negocio que involucra múltiples pasos y transacciones, un procedimiento almacenado puede ser más adecuado. Puedes usarlo para mantener la integridad de los datos y realizar múltiples operaciones de forma atómica.

3. Efectos secundarios: Si la tarea que estás realizando tiene efectos secundarios, como envío de correos electrónicos, registro de auditoría o actualización de múltiples tablas, un procedimiento almacenado es más apropiado para asegurar que todas las acciones se realicen de manera consistente.

4. Transacciones y control de seguridad: Los procedimientos almacenados pueden ser útiles para administrar transacciones y controlar el acceso y seguridad en tareas específicas.

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
CREATE OR REPLACE FUNCTION ejemplo_while() RETURNS void AS $$
DECLARE
  contador integer := 1;
BEGIN
  WHILE contador <= 5 LOOP
    RAISE NOTICE 'Iteración %', contador;
    contador := contador + 1;
  END LOOP;
END;
$$ LANGUAGE plpgsql;
```

En este ejemplo, la función ejemplo_while utiliza un ciclo WHILE para imprimir un mensaje en la consola durante 5 iteraciones. La variable contador se inicializa en 1 y se incrementa en cada iteración hasta que la condición contador <= 5 se cumple.

#### Ciclo LOOP

El ciclo LOOP se utiliza para repetir una secuencia de acciones indefinidamente hasta que se alcance una condición específica que termine el ciclo. Podemos utilizar un ciclo LOOP con una estructura IF para definir una condición de salida.

```sql
CREATE OR REPLACE FUNCTION ejemplo_loop() RETURNS void AS $$
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
$$ LANGUAGE plpgsql;
```

En este ejemplo, la función ejemplo_loop utiliza un ciclo LOOP para imprimir un mensaje en la consola hasta que contador sea mayor que 5. En cada iteración, la variable contador se incrementa, y cuando se cumple la condición contador > 5, el ciclo se termina utilizando la instrucción EXIT.

### Ciclos While y Loop en procedimientos almacenados

#### Ciclo WHILE

```sql
CREATE OR REPLACE PROCEDURE ejemplo_while()
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
```

En este procedimiento almacenado llamado ejemplo_while, se utiliza un ciclo WHILE para imprimir un mensaje en la consola durante 5 iteraciones. La variable contador se inicializa en 1 y se incrementa en cada iteración hasta que la condición contador <= 5 se cumple.

#### Ciclo LOOP

```sql
CREATE OR REPLACE PROCEDURE ejemplo_loop()
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
```

En este procedimiento almacenado llamado ejemplo_loop, se utiliza un ciclo LOOP para imprimir un mensaje en la consola hasta que contador sea mayor que 5. En cada iteración, la variable contador se incrementa, y cuando se cumple la condición contador > 5, el ciclo se termina utilizando la instrucción EXIT.

## Resources

- [tipos de datos que acepta PostgreSQL!](https://www.postgresql.org/docs/current/datatype.html)

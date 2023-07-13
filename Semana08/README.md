# Base de datos

## ¿Qué es una base de datos?

Una base de datos es una colección organizada de información estructurada, almacenada y accesible electrónicamente. En otras palabras, es un sistema computarizado diseñado para almacenar, administrar y recuperar de manera eficiente grandes cantidades de datos.

Una base de datos consta de tablas o archivos que contienen registros, donde cada registro representa una entidad o un conjunto de datos relacionados. Estos registros se organizan de acuerdo con un modelo de datos específico, como el modelo relacional, que utiliza tablas con filas y columnas para almacenar los datos.

La base de datos permite realizar operaciones como agregar, modificar o eliminar datos, así como buscar y recuperar información de manera rápida y eficiente. También puede proporcionar herramientas para gestionar la integridad de los datos, como restricciones y reglas, y soportar consultas complejas para obtener información específica de los datos almacenados.

Las bases de datos se utilizan en una amplia variedad de aplicaciones y sectores, desde sistemas de gestión empresarial y sitios web hasta aplicaciones científicas y gubernamentales. Proporcionan una forma estructurada y eficiente de almacenar y administrar datos, lo que facilita el acceso y la manipulación de la información de manera efectiva.

## Diseño conceptual, lógico y físico de una base de datos

El diseño de una base de datos se divide en tres niveles: conceptual, lógico y físico. Estos niveles representan diferentes etapas en el proceso de diseño y describen diferentes aspectos de la base de datos.

* **Diseño conceptual:**
    El diseño conceptual se enfoca en la comprensión de alto nivel de los datos y las relaciones entre ellos, independientemente de cómo se almacenen físicamente. En esta etapa, se identifican las entidades principales, sus atributos y las relaciones entre ellas. El resultado es un modelo conceptual, a menudo representado en forma de diagrama de entidad-relación (ER), que muestra las entidades como rectángulos, los atributos como óvalos y las relaciones como líneas que conectan las entidades. El diseño conceptual es independiente del sistema de gestión de bases de datos (DBMS) y proporciona una visión global de la estructura de la base de datos.

* **Diseño lógico:**
    El diseño lógico se centra en la traducción del modelo conceptual en un modelo lógico que sea comprensible por el DBMS que se utilizará para implementar la base de datos. En esta etapa, se definen las tablas, los campos y las relaciones entre ellos de acuerdo con el modelo de datos del DBMS seleccionado, como el modelo relacional. Se utilizan lenguajes de modelado de datos, como el lenguaje de definición de datos (DDL), para crear la estructura de la base de datos. El diseño lógico describe cómo se organizarán y relacionarán los datos en el DBMS, pero no aborda los aspectos de almacenamiento físico.

* **Diseño físico:**
    El diseño físico se centra en los aspectos de almacenamiento físico de la base de datos. En esta etapa, se toman decisiones sobre cómo se almacenarán los datos en el disco y cómo se optimizará el rendimiento de las consultas. Se definen índices, se asignan espacios de almacenamiento, se determina la partición de datos, se establecen restricciones de integridad y se ajustan los parámetros de rendimiento del DBMS. El diseño físico está influenciado por consideraciones de hardware, rendimiento y capacidad de almacenamiento.

En resumen, el diseño conceptual se centra en la comprensión de alto nivel de los datos y las relaciones, el diseño lógico se ocupa de la estructura y las relaciones en el contexto de un DBMS específico, y el diseño físico se centra en el almacenamiento y la optimización del rendimiento. Estos niveles de diseño trabajan juntos para crear una base de datos eficiente y bien estructurada.

## Relación uno a muchos y muchos a muchos

* **Relación uno a muchos (One-to-Many):**
    En una relación uno a muchos, un registro en una tabla está relacionado con varios registros en otra tabla. Esto se representa mediante una clave foránea en la tabla "muchos" que hace referencia a la clave primaria en la tabla "uno". Por ejemplo, consideremos las entidades "Cliente" y "Pedido". Un cliente puede realizar varios pedidos, pero un pedido solo puede pertenecer a un cliente. En este caso, la relación sería uno a muchos.

```md
Ejemplo:
Tabla "Cliente":

    cliente_id (clave primaria)
    nombre
    dirección

Tabla "Pedido":

    pedido_id (clave primaria)
    cliente_id (clave foránea)
    fecha
    total
```

En este ejemplo, la clave foránea "cliente_id" en la tabla "Pedido" establece la relación con la tabla "Cliente", permitiendo que un cliente tenga varios pedidos relacionados a través de su identificador único.

* **Relación muchos a muchos (Many-to-Many):**
    En una relación muchos a muchos, varios registros en una tabla están relacionados con varios registros en otra tabla. Para representar esta relación, se utiliza una tabla intermedia, a menudo llamada "tabla de unión" o "tabla de relación", que contiene las claves primarias de ambas tablas relacionadas. Por ejemplo, consideremos las entidades "Estudiante" y "Clase". Un estudiante puede inscribirse en varias clases y una clase puede tener varios estudiantes. En este caso, la relación sería muchos a muchos.

```md
Ejemplo:
Tabla "Estudiante":

    estudiante_id (clave primaria)
    nombre
    edad

Tabla "Clase":

    clase_id (clave primaria)
    nombre

Tabla "Estudiante_Clase" (tabla de unión):

    estudiante_id (clave foránea a la tabla "Estudiante")
    clase_id (clave foránea a la tabla "Clase")
```

En este ejemplo, la tabla "Estudiante_Clase" actúa como una tabla de unión que permite asociar múltiples estudiantes con múltiples clases. Cada fila en la tabla de unión representa una relación entre un estudiante y una clase, utilizando las claves foráneas para vincular los registros correspondientes en las tablas "Estudiante" y "Clase".

Estas son las explicaciones básicas de las relaciones uno a muchos y muchos a muchos en el contexto de las bases de datos. Estas relaciones son fundamentales para establecer vínculos y asociaciones entre diferentes entidades, lo que permite una representación más precisa y estructurada de los datos en una base de datos.

## Base de datos SQL

Los tipos de bases de datos SQL se pueden clasificar de varias formas según sus características y funcionalidades. Algunos de los tipos comunes de bases de datos SQL son:

* **Bases de datos relacionales:**
    Son el tipo más común de bases de datos SQL. Utilizan el modelo relacional para organizar los datos en tablas con filas y columnas, y establecen relaciones entre las tablas mediante claves primarias y claves foráneas. Ejemplos de bases de datos relacionales son MySQL, Oracle Database y Microsoft SQL Server.

* **Bases de datos basadas en objetos:**
    Estas bases de datos extienden el modelo relacional permitiendo el almacenamiento de objetos complejos, como imágenes, audio, vídeo y otros tipos de datos no estructurados. Proporcionan una mayor flexibilidad y eficiencia en la gestión de datos complejos. Algunos ejemplos son PostgreSQL y IBM Informix.

* **Bases de datos de columnas:**
    En lugar de almacenar los datos por filas, las bases de datos de columnas almacenan los datos por columnas. Esto proporciona una mayor compresión de datos y un rendimiento mejorado para operaciones analíticas y consultas que implican agregación y procesamiento de grandes volúmenes de datos. Un ejemplo popular es Apache Cassandra.

* **Bases de datos NoSQL:**
    Estos sistemas de bases de datos se alejan del modelo relacional y permiten una mayor flexibilidad en la estructura de los datos. NoSQL significa "Not Only SQL" (No solo SQL) y engloba diversos tipos de bases de datos, como bases de datos de documentos, bases de datos de grafos, bases de datos clave-valor y bases de datos de columnas amplias. Algunos ejemplos de bases de datos NoSQL son MongoDB, Neo4j, Redis y Apache HBase.

* **Bases de datos en memoria:**
    Estas bases de datos almacenan los datos en la memoria principal en lugar de utilizar almacenamiento en disco, lo que ofrece un acceso más rápido y un rendimiento superior. Son adecuadas para aplicaciones que requieren tiempos de respuesta muy rápidos. Ejemplos populares son Redis, Apache Ignite y MemSQL.

Estos son solo algunos ejemplos de los tipos de bases de datos SQL disponibles. Cada tipo tiene sus características y casos de uso específicos, y la elección depende de los requisitos y las necesidades del proyecto o aplicación.

## Base de datos NoSQL

Los tipos de bases de datos NoSQL (Not Only SQL) son diversos y están diseñados para satisfacer diferentes necesidades y escenarios de uso. Algunos de los tipos más comunes de bases de datos NoSQL son:

* **Bases de datos de documentos:**
    Almacenan datos en formato de documentos, generalmente en formato JSON o XML. Cada documento puede tener una estructura flexible y puede contener datos relacionados o anidados. Ejemplos populares son MongoDB, Couchbase y Apache CouchDB.

* **Bases de datos de grafos:**
    Se centran en el almacenamiento y procesamiento de datos relacionales complejos, utilizando nodos y relaciones para representar y analizar las conexiones entre los datos. Son adecuadas para escenarios donde se necesita modelar relaciones complejas, como redes sociales, análisis de redes y recomendaciones personalizadas. Ejemplos notables son Neo4j, Amazon Neptune y ArangoDB.

* **Bases de datos clave-valor:**
    Almacenan datos en forma de pares clave-valor, donde cada dato está asociado a una clave única. Son muy rápidas y escalables, y se utilizan en cachés, almacenamiento en caché de sesiones, sistemas de gestión de sesiones y aplicaciones de alta carga de lectura. Ejemplos comunes son Redis, Amazon DynamoDB y Apache Cassandra.

* **Bases de datos de columnas amplias:**
    Organizan los datos en columnas en lugar de filas, lo que permite un acceso eficiente a un subconjunto específico de columnas. Son adecuadas para aplicaciones que manejan grandes volúmenes de datos y requieren consultas analíticas y agregaciones rápidas. Ejemplos incluyen Apache HBase, ScyllaDB y Apache Cassandra.

* **Bases de datos de tiempo de serie:**
    Optimizadas para almacenar y analizar datos que cambian con el tiempo, como registros de sensores, registros de eventos y datos de telemetría. Ofrecen una alta velocidad de escritura y consultas eficientes basadas en el tiempo. Ejemplos populares son InfluxDB, Prometheus y TimescaleDB.

Estos son solo algunos ejemplos de los tipos de bases de datos NoSQL disponibles. Cada tipo tiene sus características y casos de uso específicos, y la elección depende de los requisitos y las necesidades de la aplicación o proyecto.

## Diferencias entre base de datos SQL y NoSQL

Las diferencias entre las bases de datos SQL y NoSQL radican en su modelo de datos, estructura, escalabilidad y enfoque de almacenamiento y consulta. Aquí están algunas de las diferencias clave:

* **Modelo de datos:**

    **SQL:** Utiliza el modelo relacional y organiza los datos en tablas con filas y columnas. Establece relaciones entre tablas utilizando claves primarias y foráneas.

    **NoSQL:** Ofrece una variedad de modelos de datos, como documentos, grafos, clave-valor y columnas amplias. No requiere un esquema fijo y permite una estructura más flexible para los datos.

* **Estructura y flexibilidad:**

    **SQL:** Tiene una estructura rígida y requiere definir un esquema antes de almacenar los datos. Los cambios en la estructura pueden ser complejos y requerir alteraciones de esquema.

    **NoSQL:** Permite una estructura más flexible y dinámica. Los datos se pueden agregar sin definir previamente un esquema y se pueden modificar fácilmente.

* **Lenguaje de consulta:**

    **SQL:** Utiliza el lenguaje de consulta estructurado (SQL) para realizar consultas y manipulación de datos. Permite consultas complejas y avanzadas, incluyendo operaciones de agregación, uniones y filtrado de datos.

    **NoSQL:** Utiliza consultas específicas para cada modelo de datos. Por ejemplo, en una base de datos de documentos, se pueden realizar consultas por clave o por contenido dentro de los documentos.

* **Escalabilidad:**

    **SQL:** Generalmente, las bases de datos SQL se escalan verticalmente, lo que significa agregar más recursos a un servidor para manejar una mayor carga de trabajo. Algunas bases de datos SQL pueden ofrecer capacidades de escalado horizontal, pero pueden ser más complejas de configurar.

    **NoSQL:** Suelen ser altamente escalables y están diseñadas para manejar grandes volúmenes de datos y cargas de trabajo distribuidas. Pueden escalar horizontalmente fácilmente al agregar más servidores a la infraestructura.

* **Consulta y rendimiento:**

    **SQL:** Utiliza el lenguaje de consulta estructurado (SQL) para realizar consultas y manipular los datos. Es eficaz para consultas estructuradas y complejas, como agregaciones y relaciones complejas.

    **NoSQL:** Utiliza una variedad de métodos de consulta específicos según el modelo de datos, como consultas por clave, consultas basadas en patrones o consultas de búsqueda de texto completo. Está optimizado para consultas simples y rápidas, pero puede tener limitaciones en consultas complejas.

* **Aplicaciones y casos de uso:**

    **SQL:** Ampliamente utilizado en aplicaciones que requieren integridad de datos, transacciones ACID y consultas complejas, como sistemas de gestión empresarial, aplicaciones financieras y aplicaciones que manejan datos estructurados.

    **NoSQL:** Se adapta bien a casos de uso con estructuras de datos flexibles, necesidades de escalabilidad horizontal y requerimientos de rendimiento y velocidad, como aplicaciones web y móviles, análisis de big data, sistemas de recomendación y aplicaciones en tiempo real.

* **Enfoque de almacenamiento:**

    **SQL:** Los datos se almacenan en tablas con filas y columnas, siguiendo un modelo estructurado y normalizado. Los esquemas predefinidos garantizan la consistencia de los datos.

    **NoSQL:** Utiliza diferentes enfoques de almacenamiento según el modelo de datos. Puede incluir almacenamiento de documentos, almacenamiento clave-valor, almacenamiento de columnas amplias, entre otros. Esto permite adaptarse mejor a diferentes tipos de datos y requisitos de rendimiento.

Es importante tener en cuenta que estas son generalizaciones y que tanto las bases de datos SQL como las NoSQL tienen una amplia gama de características y variaciones en su implementación. La elección entre una base de datos SQL y una NoSQL depende de los requisitos específicos del proyecto y las características deseadas.

## Ventajas y desventajas de usar NoSQL

* **Ventajas de usar NoSQL:**

    **Flexibilidad en el esquema:** Las bases de datos NoSQL permiten agregar datos sin un esquema fijo y pueden adaptarse fácilmente a cambios en la estructura de los datos. Esto es especialmente útil en proyectos en los que los requisitos de datos pueden evolucionar con el tiempo.

    **Escalabilidad horizontal:** Las bases de datos NoSQL están diseñadas para escalar horizontalmente, lo que significa que pueden manejar grandes volúmenes de datos y cargas de trabajo distribuidas. Pueden agregar más servidores a la infraestructura para manejar la creciente demanda, lo que permite una mayor escalabilidad y rendimiento.

    **Rendimiento rápido:** Las bases de datos NoSQL están optimizadas para consultas simples y rápidas. Al eliminar la complejidad de las consultas y las operaciones relacionales, pueden lograr un rendimiento superior en escenarios de alto rendimiento y aplicaciones con grandes volúmenes de datos.

    **Manejo de datos no estructurados:** Los diferentes modelos de datos en las bases de datos NoSQL, como documentos, grafos y columnas amplias, permiten el almacenamiento y la recuperación eficientes de datos no estructurados o semiestructurados, como documentos JSON, datos de redes sociales y datos de telemetría.

* **Desventajas de usar NoSQL:**

    **Menor soporte para consultas complejas:** Aunque las bases de datos NoSQL son rápidas en consultas simples, pueden tener dificultades para manejar consultas complejas que involucran múltiples relaciones y agregaciones. El énfasis en la velocidad y la flexibilidad puede llevar a limitaciones en términos de consultas complejas y análisis avanzado.

    **Falta de estándares y herramientas maduras:** En comparación con las bases de datos SQL, el ecosistema de herramientas y estándares para bases de datos NoSQL puede ser menos maduro. Esto puede resultar en una curva de aprendizaje más pronunciada y menos opciones de herramientas de administración y desarrollo.

    **Menor integridad de datos:** Las bases de datos NoSQL a menudo sacrifican la integridad de los datos y las garantías ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad) para obtener mayor rendimiento y escalabilidad. Esto puede hacer que el mantenimiento de la coherencia y la integridad de los datos sea más complejo en ciertos escenarios.

    **Menor adopción en sistemas tradicionales:** Las bases de datos NoSQL son relativamente nuevas en comparación con las bases de datos SQL, lo que puede llevar a una menor adopción en sistemas tradicionales o entornos donde las bases de datos SQL han sido ampliamente utilizadas y están bien establecidas.

En última instancia, la elección entre una base de datos NoSQL y una SQL depende de las necesidades específicas del proyecto y las características deseadas, considerando factores como los requisitos de rendimiento, escalabilidad, flexibilidad del esquema y las habilidades del equipo de desarrollo.

## Que significa SQL DDL

SQL DDL (Data Definition Language) es un subconjunto del lenguaje SQL que se utiliza para definir y manipular la estructura de la base de datos. Se utiliza para crear, modificar y eliminar objetos de la base de datos, como tablas, vistas, índices y restricciones. Algunos ejemplos de instrucciones DDL son:

* **CREATE TABLE:** Se utiliza para crear una nueva tabla en la base de datos. Define los nombres de las columnas, los tipos de datos y las restricciones de la tabla.

```sql
CREATE TABLE empleados (
  id INT PRIMARY KEY,
  nombre VARCHAR(100),
  salario NUMERIC(10, 2)
);
```

* **ALTER TABLE:** Se utiliza para modificar la estructura de una tabla existente, como agregar o eliminar columnas, cambiar los tipos de datos o agregar restricciones.

```sql
ALTER TABLE empleados
ADD COLUMN edad INT;
```

* **DROP TABLE:** Se utiliza para eliminar una tabla existente de la base de datos y todos sus datos.

```sql
DROP TABLE empleados;
```

* **CREATE INDEX:** Se utiliza para crear un índice en una o varias columnas de una tabla para mejorar el rendimiento de las consultas.

```sql
CREATE INDEX idx_nombre ON empleados (nombre);
```

* **CREATE VIEW:** Se utiliza para crear una vista, que es una representación virtual de los datos seleccionados de una o varias tablas.

```sql
CREATE VIEW empleados_vista AS
SELECT id, nombre FROM empleados WHERE salario > 5000;
```

* **CREATE CONSTRAINT:** Se utiliza para crear restricciones en las tablas, como claves primarias, claves foráneas o restricciones de unicidad.

```sql
ALTER TABLE empleados
ADD CONSTRAINT pk_empleados PRIMARY KEY (id);
```

Estas son solo algunas de las instrucciones DDL más comunes en SQL. Las instrucciones DDL son esenciales para definir la estructura de la base de datos y establecer las relaciones entre los objetos, lo que permite la creación y modificación de esquemas de bases de datos.

## Que significa SQL DML

SQL DML (Data Manipulation Language) es un subconjunto del lenguaje SQL que se utiliza para manipular los datos almacenados en una base de datos. Las instrucciones DML se utilizan para insertar, actualizar y eliminar datos en las tablas. A continuación, se presentan algunos ejemplos de instrucciones DML:

* **SELECT:** Se utiliza para recuperar datos de una o varias tablas en la base de datos.

```sql
SELECT * FROM empleados;
```

* **INSERT INTO:** Se utiliza para insertar nuevos registros en una tabla.

```sql
INSERT INTO empleados (id, nombre, salario)
VALUES (1, 'Juan', 3000);
```

* **UPDATE:** Se utiliza para actualizar los valores de una o varias columnas en registros existentes de una tabla.

```sql
UPDATE empleados
SET salario = salario * 1.1
WHERE id = 1;
```

* **DELETE FROM:** Se utiliza para eliminar registros de una tabla.

```sql
DELETE FROM empleados
WHERE id = 1;
```

* **MERGE:** Disponible en algunos sistemas de gestión de bases de datos, combina las operaciones INSERT, UPDATE y DELETE en una sola instrucción, basada en una condición de coincidencia.

```sql
MERGE INTO empleados AS target
USING (SELECT 1 AS id, 'Juan' AS nombre, 3500 AS salario) AS source
ON (target.id = source.id)
WHEN MATCHED THEN
  UPDATE SET target.salario = source.salario
WHEN NOT MATCHED THEN
  INSERT (id, nombre, salario)
  VALUES (source.id, source.nombre, source.salario);
```

Estos son solo algunos ejemplos de instrucciones DML en SQL. Las instrucciones DML permiten interactuar con los datos almacenados en las tablas de una base de datos, permitiendo su inserción, actualización y eliminación según sea necesario para mantener y manipular la información almacenada.

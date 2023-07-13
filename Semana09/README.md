# Base de datos

## ¿Qué es una base de datos?

* Es un lugar donde se puede almacenar, manipular y recuperar datos.
* Estos datos se almacenan en un servidor
* Una base de datos esta compuesta por tablas
* Las tablas estan formados por columnas y filas
* Los datos se almacena en tablas

## Qué es SQL (Structured Query Language) (lenguaje de consulta estructurado) ?

* SQL no se considera propiamente un lenguaje de programación en el sentido tradicional. SQL es un lenguaje de consulta diseñado específicamente para interactuar con sistemas de gestión de bases de datos relacionales (RDBMS) y realizar operaciones relacionadas con la base de datos, como consultas, inserciones, actualizaciones y eliminaciones.
* SQL es un lenguaje de consulta estructurado que nos permite interactuar con la base de datos.
* SQL es un estandar en las base de datos relacionales.

## Qué es PostgreSQL?

* PostgreSQL, es un poderoso motor de base de datos relacional de objetos
* Es open source osea es de código abierto.
* Usa SQL para interactuar con la base de datos.
* Otros motores de base de datos relacionales: Oracle, MySQL, SQLSever, MariaDB, SQLite, etc.

## Como nos conectamos al servidor, a la base de datos?

* Por GUI Client (interfaz de usuario grafica) Cliente GUI
* Terminal o la línea de comandos
* Aplicación

## Conectarse a la base de datos

* psql -h [host] -p [port] -U [username] [database]
* psql -h localhost -p 5432 -U postgres postgres

## Ejecutar un file sql desde la shel de postgres

* \i /Users/[NAME_USER]/Donwloads/[filename].sql

## Ejecutar un file sql sin estar conectado a postgres

* psql -U admin -d ecommerce < /mnt/c/Users/VITUCHO/Downloads/person.sql

## Recursos

* [https://sqlbolt.com/]
* [https://mockaroo.com/]
* [https://mode.com/sql-tutorial/]
* [https://www.learnsqlonline.org/en/]
* [https://github.com/ABZ-Aaron/SQL-Tutorials]
* [https://dataschool.com/how-to-teach-people-sql/sql-join-types-explained-visually/]
* [https://pgexercises.com/]
* [https://popsql.com/learn-sql/postgresql]
* [https://www.postgresql.org/docs/current/datatype.html]
* [https://www.postgresqltutorial.com/]
* [https://www.tutorialspoint.com/postgresql/]

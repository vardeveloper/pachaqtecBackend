-- Salir de la shell de postgres
\q

-- Muestra el listado de bases de datos
\l

-- Conectarse a la base de datos
\c ecommerce

-- Muestra todas las tablas de una base de datos
\dt

-- Muestra la estructura de una tabla
\d [table]

-- Ejecuta un archivo sql
\i /Users/[NAME_USER]/Donwloads/[filename].sql


-- Crear la base de datos
CREATE DATABASE ecommerce;

-- Crear tabla de person
CREATE TABLE person (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(150) NOT NULL,
  gender VARCHAR(7) NULL,
  date_of_birth DATE NULL,
  country VARCHAR (50) NULL
);

-- Eliminar una tabla
DROP TABLE person;

-- Insertar registro
INSERT INTO person (first_name, last_name, gender, date_of_birth, email)
VALUES ('Peter', 'Razor', 'MALE', '1990-01-10', 'garmataged6@twitter.com');

-- Fechas
SELECT NOW();
SELECT NOW()::DATE;
SELECT NOW()::TIME;

SELECT NOW() - INTERVAL '10 YEARS';
SELECT NOW() - INTERVAL '10 MONTHS';
SELECT NOW() - INTERVAL '10 DAY';
SELECT NOW() - INTERVAL '10 DAYS';
SELECT NOW() + INTERVAL '10 DAYS';
SELECT NOW() + INTERVAL '10 MONTHS';

SELECT NOW()::DATE + INTERVAL '10 MONTHS';
SELECT (NOW() + INTERVAL '10 MONTHS')::DATE;

SELECT EXTRACT(YEAR FROM NOW());
SELECT EXTRACT(MONTH FROM NOW());
SELECT EXTRACT(DAY FROM NOW());
SELECT EXTRACT(DOW FROM NOW());
SELECT EXTRACT(CENTURY FROM NOW());

SELECT AGE(NOW(), date_of_birth) AS age FROM person WHERE date_of_birth IS NOT NULL;


ALTER TABLE person DROP CONSTRAINT person_pkey;
DELETE FROM person WHERE id = 1;
ALTER TABLE person ADD PRIMARY KEY (id);

SELECT email, count(*) FROM person  GROUP BY email HAVING COUNT(*) > 1;
SELECT * FROM person WHERE email = '';


-- tener un valor único por columna
-- no es lo mismo que una clave primaria, porque ello se utilizan 
-- para identificar una única fila de una tabla
-- esto es tener valores únicos por columna 
-- para añadir la restriccion


ALTER TABLE person ADD CONSTRAINT unique_email UNIQUE (email);
\d person
ALTER TABLE person DROP CONSTRAINT unique_email;
\d person
ALTER TABLE person ADD UNIQUE (email); 
-- la diferencia es que aquí dejamos que el nombre de la 
-- restriccion sea definido por POSTGRES

ALTER TABLE person ADD CONSTRAINT gender_constraint CHECK (gender = 'Female' OR gender = 'Male');
\d person


ALTER SEQUENCE person_id_seq RESTART WITH 10;
SELECT * FROM person_id_seq;
SELECT nextval('person_id_seq'::regclass);


select * from pg_available_extensions;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
\dt

SELECT uuid_generate_v4();

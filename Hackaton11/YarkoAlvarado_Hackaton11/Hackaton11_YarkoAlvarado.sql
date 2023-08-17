-- 1. Crea una fucion para sumar 2 numeros enteros
create or replace function sumar_enteros(primer_numero integer,segundo_numero integer)
returns integer as 
$$
declare
	resultado integer;
begin 
	resultado = primer_numero + segundo_numero;
	
	return resultado;
	
end;
$$
language plpgsql;

select sumar_enteros(12,14);

-- 2. Función para calcular el área de un círculo.

create or replace function calcular_area_circulo(radio integer)
returns integer as 
$$
declare
	resultado integer;
begin 
	resultado = radio*pi();
	
	return resultado;
	
end;
$$
language plpgsql;

select calcular_area_circulo(14);

-- 3. Función para verificar si un número es primo.

create or replace function es_primo(numero integer)
returns text as 
$$
declare
	resultado text;
	divisores integer :=0;
begin 
	for n in 1..numero loop
		if mod(numero,n) = 0 then 
			divisores = divisores + 1;
		end if;
	end loop;
	
	if divisores <= 2 then
		resultado := 'Si es primo';
	else
		resultado := 'No es primo';
	end if;
	
	return resultado;
end;
$$
language plpgsql;

select es_primo(20);
select es_primo(7);

-- 4. Procedimiento para insertar un nuevo empleado en la tabla "empleados".

create table empleados (
id_empleado serial PRIMARY KEY,
nombre text,
apellido text,
edad integer,
puesto text
)

create or replace function insertar_empleado(nombre text,apellido text,edad integer,puesto text)
returns text as 
$$
declare 
	resultado text;
begin
	insert into empleados (nombre,apellido,edad,puesto)
	values (nombre,apellido,edad,puesto);
	return 'Empleado agregado: ' || nombre ||' ' || apellido;
end;
$$
language plpgsql;
select insertar_empleado('Yarko','Alvarado',25,'Programador');

select * from empleados
-- 5. Procedimiento para actualizar el salario de un empleado en la tabla "empleados" por ID.

alter table empleados 
add column salario integer;

update empleados set salario = 3800 where salario is null;

create or replace procedure actualizar_salario(id_ingresada integer, nuevo_salario integer)
as
$$
begin
	update empleados set salario = nuevo_salario where id_empleado = id_ingresada;
	if found then 
		raise notice 'Nuevo salario para empleado con ID % es % ',id_ingresada,nuevo_salario;
	else
		raise notice 'No se encontró un empleado con ID %',id_ingresada;
	end if;
end;
$$
language plpgsql;

call actualizar_salario(1,5600);

-- 6. Procedimiento para eliminar un empleado de la tabla "empleados" por ID.

insert into empleados (nombre,apellido,edad,puesto,salario)
values ('Ezra','Sanchez',52,'Musico',3200),('Siena','Alvarado',24,'Medico',12200),('Rebeca','Zavala',23,'Arquitecto',8200)

create or replace procedure eliminar_empleado(id_ingresada integer)
as
$$
begin
	delete from empleados where id_empleado = id_ingresada;
	if found then 
		raise notice 'Empleado con ID % eliminado ',id_ingresada;
	else
		raise notice 'No se encontró un empleado con ID %',id_ingresada;
	end if;
end;
$$
language plpgsql;

call eliminar_empleado(6);

select * from empleados

-- 7. Trigger para registrar la fecha de inserción de un nuevo empleado en la tabla "empleados".

create table registro_empleados (
    id serial primary key,
    id_empleado integer,
    fecha_insercion timestamp,
    accion text
);

create or replace function regis_fecha_insercion()
returns trigger as
$$
begin
    insert into registro_empleados (id_empleado, fecha_insercion, accion)
    values (new.id_empleado, now(), 'inserción de empleado');
	raise notice 'Registro agregado con exito a tabla empleados';
	return new;
	
end;
$$
language plpgsql;

create trigger tr_regis_fecha_insercion
after insert on empleados
for each row
execute function regis_fecha_insercion();

insert into empleados (nombre,apellido,edad,puesto,salario)
values ('Pedro','Sanchez',67,'Genrente',15500)

select * from registro_empleados

-- 8. Trigger para actualizar automáticamente el salario de un empleado después de una actualización en la tabla "empleados".

create or replace function auto_actualizar_salario()
returns trigger as
$$
begin
    if new.salario between 1000 and 150000 then
		new.salario :=new.salario + 500;
		update empleados set salario = new.salario where id_empleado = new.id_empleado;
	end if;
	raise notice 'Actualizacion realizada en la tabla EMPLEADOS - Salario actualizado con éxito en la tabla empleados';
	return new;
end;
$$
language plpgsql;

create trigger tr_auto_actualizar_salario
after insert or update on empleados
for each row
execute function auto_actualizar_salario();

update empleados set nombre = 'Carolina' where nombre = 'Iris'

select * from empleados

-- 9. Trigger para evitar la eliminación de empleados con más de 5 años de antigüedad.

create or replace procedure avoid_deleting_more_than_5y()
as 
$$
begin
	if antiguedad_años >= 5 then
	raise exception 'No se permite eliminar empleados con más de 5 o más años de antigüedad';
	end if;
end;
$$
language plpgsql;

create trigger tr_avoid_deleting_more_than_5y
before delete on empleados
for each row
execute procedure avoid_deleting_more_than_5y();

-- 10. Función para calcular el promedio de los salarios de todos los empleados.

create or replace function Promediar_salarios()
returns integer as
$$
begin
	return (select avg(salario) from empleados as Promedio_salarios);
end;
$$
language plpgsql;

select Promediar_salarios();

-- 11. Función para obtener el nombre completo de un empleado concatenando nombre y apellido.

create or replace function full_name(id_ingresada integer)
returns text as 
$$
declare
    nombre_completo text;
begin
    select nombre || ' ' || apellido into nombre_completo
    from empleados
    where id_empleado = id_ingresada;

    if nombre_completo is not null then
        return 'Nombre completo del empleado es: ' || nombre_completo;
    else
        return 'No se encontró ningún empleado con el ID ingresado';
    end if;
end;
$$
language plpgsql;

select full_name(1)

-- 12. Procedimiento para asignar un nuevo jefe a un departamento y actualizar los empleados afectados.

create or replace procedure pr_asignar_jefe_dep(nuevo_jefe text,dep_ingresado text) 
as
$$
begin
	update empleados set jefe_area = nuevo_jefe where jefe_area != nuevo_jefe and departamento = dep_ingresado;
	raise notice 'Jefe actualizado - empleados afectados actualizados';
	
end;
$$
language plpgsql;
	
call pr_asignar_jefe_dep('Carla','Operaciones');
select * from empleados
-- 13. Procedimiento para aumentar el salario de todos los empleados en un departamento.

create or replace procedure pr_xdep_aumento_salario_(dep_ingresado text) 
as
$$
begin
	update empleados set salario= salario +500 where departamento = dep_ingresado;
	raise notice 'Salario actualizado - empleados afectados actualizados';
	
end;
$$
language plpgsql;
	
call pr_xdep_aumento_salario_('Operaciones');
select * from empleados

-- 14. Procedimiento para eliminar todos los registros de una tabla (con confirmación).

create table tabla_comodin (
id_tabla serial primary key,
numeros integer
)
insert into tabla_comodin (numeros) values (1),(2),(3),(4),(5),(6),(7);
select * from tabla_comodin

create or replace procedure pr_borrar_todo() 
as
$$
begin
	delete from tabla_comodin;
	if not exists (select 1 from tabla_comodin)then
		raise notice 'Tabla vacia, todos los registros eliminados';
	end if;
end;
$$
language plpgsql;

call pr_borrar_todo();

-- 15. Función para obtener una lista de empleados ordenados por salario de forma descendente.

create or replace function income_desc_order() 
returns setof integer as
$$
begin
	return query
	select salario from empleados order by salario desc; 
end;
$$
language plpgsql;

select income_desc_order();

-- 16. Función para obtener la cantidad de empleados por departamento.

create or replace function q_empleados_xdep() 
returns setof bigint as
$$
begin
	return query
	select count(nombre) from empleados group by departamento; 
end;
$$
language plpgsql;

select q_empleados_xdep();

-- 17. Función para obtener el salario máximo de todos los empleados.

create or replace function max_salary_xemployee() 
returns setof integer as
$$
begin
	return query
	select max(salario) from empleados; 
end;
$$
language plpgsql;

select max_salary_xemployee();

-- 18. Trigger para actualizar automáticamente la fecha de modificación de un registro en una tabla.

create or replace function update_date_update()
returns trigger as
$$
begin
    insert into registro_empleados (fecha_modificacion) values (new.fecha_modificacion);
    new.fecha_modificacion := now();
    raise notice 'Fecha nueva de actualizacion: %', now();
    return new;
end;
$$
language plpgsql;

create trigger tr_update_date_update
before update on registro_empleados
for each row 
execute function update_date_update();

update registro_empleados set id_empleado = 13 where id_empleado = 16;
select * from registro_empleados
-- 19. Trigger para evitar que se inserten registros duplicados en una tabla.

create or replace function evitar_duplicados()
returns trigger as
$$
begin
    if exists (
        select 1 from empleados where nombre = new.nombre
    ) then
        raise exception 'El registro ya existe en la tabla';
    end if;
    
    return new;
end;
$$
language plpgsql;

create trigger tr_evitar_duplicados
before insert on empleados
for each row
execute function evitar_duplicados();


-- 20. Trigger para mantener un registro de los cambios realizados en una tabla en una tabla de auditoría.

create or replace function regis_fecha_insercion2()
returns trigger as
$$
begin
    insert into registro_empleados (id_empleado, fecha_insercion, accion)
    values (new.id_empleado, now(), 'inserción de empleado');
	raise notice 'Registro agregado con exito a tabla empleados';
	return new;
	
end;
$$
language plpgsql;

create trigger tr_regis_fecha_insercion2
before insert on empleados
for each row
execute function regis_fecha_insercion2();
CREATE TABLE auditoria_clientes (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  accion VARCHAR(50) NOT NULL,
  fecha TIMESTAMP NOT NULL,
  cliente_id BIGSERIAL NOT NULL
);


CREATE OR REPLACE FUNCTION fn_auditoria_eventos()
RETURNS TRIGGER AS $$
BEGIN
  IF (TG_OP = 'INSERT') THEN
    INSERT INTO auditoria_clientes (accion, fecha, cliente_id)
    VALUES ('INSERT', NOW(), NEW.id);
    RETURN NEW;
  ELSEIF (TG_OP = 'UPDATE') THEN
    INSERT INTO auditoria_clientes (accion, fecha, cliente_id)
    VALUES ('UPDATE', NOW(), NEW.id);
    RETURN NEW;
  ELSEIF (TG_OP = 'DELETE') THEN
    INSERT INTO auditoria_clientes (accion, fecha, cliente_id)
    VALUES ('DELETE', NOW(), OLD.id);
    RETURN OLD;
  END IF;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tr_auditoria_eventos
AFTER INSERT OR UPDATE OR DELETE 
ON clientes
FOR EACH ROW
EXECUTE FUNCTION fn_auditoria_eventos();


DROP TRIGGER IF EXISTS tr_auditoria_eventos ON clientes;


INSERT INTO clientes (nombre, email, direccion)
VALUES ('Peter knives 2', 'garmataged62@twitter.com', 'Lima');

update clientes set nombre = 'Juanes' where id = 107;

delete from clientes where id = 107;

select * from clientes;
select * from auditoria_clientes order by 1 desc;


-------------------------------------------------------------------------------
-------------------------------------------------------------------------------


CREATE OR REPLACE FUNCTION fn_block_weekend_changes()
RETURNS TRIGGER AS $$
BEGIN
  RAISE NOTICE 'No se permiten cambios los fines de semana';
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tr_block_weekend_changes
  BEFORE INSERT OR UPDATE OR DELETE OR TRUNCATE
  ON clientes
  FOR EACH STATEMENT
  WHEN(
    EXTRACT('DOW' FROM CURRENT_TIMESTAMP) BETWEEN 6 AND 7
  )
  EXECUTE FUNCTION fn_block_weekend_changes();

DROP TRIGGER IF EXISTS tr_block_weekend_changes ON clientes;

UPDATE clientes
SET nombre = 'test'
WHERE id = 1

INSERT INTO clientes (nombre, email, direccion)
VALUES ('Peter knives 2', 'garmataged62@twitter.com', 'Lima');

delete from clientes where id = 1;

select * from auditoria_clientes order by 1 desc;


-------------------------------------------------------------------------------
-------------------------------------------------------------------------------


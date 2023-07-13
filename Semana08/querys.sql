-- Crear la base de datos
CREATE DATABASE ecommerce;

-- Conectarse a la base de datos
\c ecommerce;

-- Crear tabla de productos
CREATE TABLE productos (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio NUMERIC(10, 2) NOT NULL,
  descripcion TEXT,
  stock INT NOT NULL
);

-- Insertar datos de prueba en la tabla de productos
INSERT INTO productos (nombre, precio, descripcion, stock)
VALUES
  ('Camiseta', 19.99, 'Camiseta de algodón para hombres', 100),
  ('Pantalón', 29.99, 'Pantalón de mezclilla para mujeres', 50),
  ('Zapatos', 59.99, 'Zapatos deportivos para correr', 75);

-- Crear tabla de clientes
CREATE TABLE clientes (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  direccion VARCHAR(200) NOT NULL
);

-- Insertar datos de prueba en la tabla de clientes
INSERT INTO clientes (nombre, email, direccion)
VALUES
  ('Juan Pérez', 'juan@example.com', 'Calle Principal 123'),
  ('María Gómez', 'maria@example.com', 'Avenida Central 456');

-- Crear tabla de pedidos
CREATE TABLE pedidos (
  id SERIAL PRIMARY KEY,
  cliente_id INT NOT NULL,
  producto_id INT NOT NULL,
  cantidad INT NOT NULL,
  fecha_pedido DATE NOT NULL,
  FOREIGN KEY (cliente_id) REFERENCES clientes (id),
  FOREIGN KEY (producto_id) REFERENCES productos (id)
);

-- Insertar datos de prueba en la tabla de pedidos
INSERT INTO pedidos (cliente_id, producto_id, cantidad, fecha_pedido)
VALUES
  (1, 1, 2, CURRENT_DATE),
  (1, 3, 1, CURRENT_DATE),
  (2, 2, 3, CURRENT_DATE);

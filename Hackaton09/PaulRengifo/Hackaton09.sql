-- Muestra todos los registros de una tabla llamada "clientes".
SELECT * FROM clientes;

-- Selecciona el nombre y el apellido de todos los clientes cuyo país sea "España".
SELECT nombre, apellido FROM clientes WHERE pais = 'España';

-- Muestra el nombre de todos los productos ordenados alfabéticamente.
SELECT nombre FROM productos ORDER BY nombre;

-- Calcula el precio promedio de todos los productos.
SELECT AVG(precio) FROM productos;

-- Muestra el nombre del producto y la cantidad en stock de todos los productos cuyo precio sea superior a 100.
SELECT nombre, stock FROM productos WHERE precio > 100;

-- Muestra los nombres de los empleados cuyo salario sea superior a 50000.
SELECT * FROM empleados WHERE salario > 50000;

-- Selecciona el nombre y el apellido de todos los empleados que trabajen en el departamento de "Ventas".
SELECT nombre, apellido FROM empleados WHERE departamento = 'Sales';

-- Calcula la suma total de los salarios de todos los empleados.
SELECT SUM(salario) FROM empleados;

-- Muestra el nombre del producto y la cantidad vendida de todos los productos que tengan una cantidad vendida superior a 100.
SELECT productos.nombre, ventas.cantidad FROM ventas INNER JOIN productos ON productos.id = ventas.producto_id WHERE cantidad > 100;

-- Selecciona el nombre y el apellido de los empleados cuyo nombre comience con la letra "J".
SELECT nombre, apellido FROM empleados WHERE nombre LIKE 'J%';

-- Calcula el promedio de edad de todos los clientes.
-- clientes no tiene columna de nacimiento, usaré empleados
SELECT AVG((CURRENT_DATE - fecha_nacimiento)/365)  FROM empleados;

-- Muestra los nombres de los productos que contengan la palabra "azul" en su descripción.
SELECT * FROM productos WHERE nombre LIKE '%blue%';

-- Selecciona el nombre del producto y el nombre del proveedor de todos los productos.
SELECT nombre, proveedor FROm productos;

-- Muestra el nombre del producto y la cantidad en stock de todos los productos que tengan una cantidad en stock inferior a 10.
SELECT * FROM productos WHERE stock < 10;

-- Selecciona el nombre del producto y la cantidad vendida de todos los productos que tengan una cantidad vendida entre 50 y 100.
SELECT nombre, stock FROM productos INNER JOIN ventas ON productos.id = ventas.producto_id WHERE ventas.cantidad BETWEEN 50 AND 100

-- Calcula la suma total de los precios de todos los productos.
SELECT SUM(precio) FROM productos;

-- Muestra el nombre del producto y el nombre del cliente de todos los productos vendidos.
SELECT productos.nombre AS nombre_producto, clientes.nombre AS nombre_cliente FROM productos 
INNER JOIN ventas ON ventas.producto_id = productos.id
INNER JOIN clientes ON ventas.cliente_id = clientes.id

-- Selecciona el nombre y el apellido de los empleados que hayan nacido antes de 1980.
SELECT * FROM empleados WHERE EXTRACT('Year' FROM fecha_nacimiento) <= 1980;

-- Muestra el nombre de los productos y la cantidad vendida en orden descendente de cantidad vendida.
SELECT productos.nombre, SUM(ventas.cantidad) AS suma_productos FROM productos
INNER JOIN ventas ON ventas.producto_id = productos.id
GROUP BY productos.nombre
ORDER BY SUM(ventas.cantidad) DESC

-- Selecciona el nombre del producto y el nombre del cliente de todos los productos vendidos en el último mes.
SELECT ventas.fecha_venta,productos.nombre AS nombre_producto, clientes.nombre AS nombre_cliente FROM productos 
INNER JOIN ventas ON ventas.producto_id = productos.id
INNER JOIN clientes ON ventas.cliente_id = clientes.id
WHERE (EXTRACT('Year' FROM fecha_venta) = EXTRACT('Year' FROM CURRENT_DATE)) AND 
(EXTRACT('Month' FROM fecha_venta) = EXTRACT('Month' FROM CURRENT_DATE - interval '1 month'))













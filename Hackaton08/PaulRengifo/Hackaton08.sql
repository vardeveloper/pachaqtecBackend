CREATE TABLE Usuarios (
	id_usuario UUID DEFAULT gen_random_uuid() PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL,
	apellido VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	password VARCHAR(100) NOT NULL,
	created_on TIMESTAMP NOT NULL,
	last_login TIMESTAMP
)


CREATE TABLE Categorias (
	id_categoria UUID DEFAULT gen_random_uuid() PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL,
	descripcion TEXT
)

CREATE TABLE Productos (
	id_producto UUID DEFAULT gen_random_uuid() PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL,
	descripcion VARCHAR(300),
	precio FLOAT,
	cantidad BIGINT NOT NULL,
	marca VARCHAR(100) NOT NULL,
	id_categoria UUID,
	CONSTRAINT fk_Categoria 
		FOREIGN KEY (id_categoria) 
			REFERENCES Categorias(id_categoria)
)



CREATE TABLE Metodo_Pago (
	id_metodo_pago UUID DEFAULT gen_random_uuid() PRIMARY KEY,
	tipo_metodo VARCHAR(100) NOT NULL,
	numero_tarjeta VARCHAR(100) NOT NULL
)

CREATE TABLE Direccion(
	id_direccion UUID DEFAULT gen_random_uuid() PRIMARY KEY,
	id_usuario UUID,
	direccion VARCHAR(100) NOT NULL,
	ciudad VARCHAR(100) NOT NULL,
	provincia VARCHAR(100) NOT NULL,
	pais VARCHAR(100) NOT NULL,
	codigo_postal VARCHAR(100) NOT NULL,
	CONSTRAINT fk_Usuarios FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
)

CREATE TABLE Pedidos (
	id_pedido UUID DEFAULT gen_random_uuid() PRIMARY KEY,
	fecha_pedido TIMESTAMP,
	estado_pedido VARCHAR(100),
	id_direccion UUID,
	id_usuario UUID,
	id_metodo_pago UUID,
	CONSTRAINT fk_Direccion 
		FOREIGN KEY (id_direccion) 
			REFERENCES Direccion(id_direccion),
	CONSTRAINT fk_Usuarios
		FOREIGN KEY (id_usuario)
			REFERENCES Usuarios(id_usuario),
	CONSTRAINT fk_Metodo_Pago
		FOREIGN KEY (id_metodo_pago)
			REFERENCES Metodo_Pago(id_metodo_pago)
)

CREATE TABLE Carrito (
	id_carrito UUID DEFAULT gen_random_uuid() PRIMARY KEY,
	id_usuario UUID,
	estado_carrito VARCHAR(100),
	CONSTRAINT fk_Carrito
		FOREIGN KEY (id_usuario)
			REFERENCES Usuarios(id_usuario)
)
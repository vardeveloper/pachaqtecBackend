-- Database: Hackaton09 FabricioCastillo

-- DROP DATABASE IF EXISTS "Hackaton09 FabricioCastillo";

CREATE TABLE clientes (
  id INT PRIMARY KEY,
  nombre VARCHAR(50),
  apellido VARCHAR(50),
  pais VARCHAR(50)
);

-- Tabla de productos
CREATE TABLE productos (
  id INT PRIMARY KEY,
  nombre VARCHAR(50),
  descripcion VARCHAR(100),
  precio DECIMAL(10,2),
  stock INT
);

-- Tabla de empleados
CREATE TABLE empleados (
  id INT PRIMARY KEY,
  nombre VARCHAR(50),
  apellido VARCHAR(50),
  salario DECIMAL(10,2),
  departamento VARCHAR(50),
  fecha_nacimiento DATE
);

-- Tabla de ventas
CREATE TABLE ventas (
  id INT PRIMARY KEY,
  producto_id INT,
  cliente_id INT,
  cantidad INT,
  fecha_venta DATE,
  FOREIGN KEY (producto_id) REFERENCES productos(id),
  FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

insert into Clientes (ID, Nombre, Apellido, Pais) values (1, 'Valery', 'Yurocjhin', 'Indonesia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (2, 'Wilhelmina', 'Arnaut', 'Poland');
insert into Clientes (ID, Nombre, Apellido, Pais) values (3, 'Halsy', 'Dowry', 'China');
insert into Clientes (ID, Nombre, Apellido, Pais) values (4, 'Colene', 'McIlwraith', 'France');
insert into Clientes (ID, Nombre, Apellido, Pais) values (5, 'Wallis', 'Carnie', 'Finland');
insert into Clientes (ID, Nombre, Apellido, Pais) values (6, 'Maddy', 'Scotchmoor', 'Thailand');
insert into Clientes (ID, Nombre, Apellido, Pais) values (7, 'Shep', 'Gepson', 'Czech Republic');
insert into Clientes (ID, Nombre, Apellido, Pais) values (8, 'Nicoli', 'MacMakin', 'Czech Republic');
insert into Clientes (ID, Nombre, Apellido, Pais) values (9, 'Tabbatha', 'Pacitti', 'China');
insert into Clientes (ID, Nombre, Apellido, Pais) values (10, 'Jessa', 'Zarfati', 'Portugal');
insert into Clientes (ID, Nombre, Apellido, Pais) values (11, 'Sheryl', 'Yekel', 'Russia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (12, 'Selena', 'Schole', 'Pakistan');
insert into Clientes (ID, Nombre, Apellido, Pais) values (13, 'Slade', 'Headingham', 'China');
insert into Clientes (ID, Nombre, Apellido, Pais) values (14, 'Shirley', 'Derry', 'Japan');
insert into Clientes (ID, Nombre, Apellido, Pais) values (15, 'Austin', 'Verbrugghen', 'Albania');
insert into Clientes (ID, Nombre, Apellido, Pais) values (16, 'Sandi', 'Plewes', 'Cambodia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (17, 'Nanny', 'Kemme', 'Indonesia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (18, 'Mireille', 'Twelves', 'Slovenia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (19, 'Lauren', 'Easter', 'Indonesia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (20, 'Keary', 'Feechum', 'China');
insert into Clientes (ID, Nombre, Apellido, Pais) values (21, 'Catherina', 'Lanceter', 'Myanmar');
insert into Clientes (ID, Nombre, Apellido, Pais) values (22, 'Nickola', 'Tibbs', 'Indonesia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (23, 'Milzie', 'Benninck', 'Russia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (24, 'Livvy', 'Keast', 'China');
insert into Clientes (ID, Nombre, Apellido, Pais) values (25, 'Carine', 'Wolfers', 'Madagascar');
insert into Clientes (ID, Nombre, Apellido, Pais) values (26, 'Flory', 'Ketteridge', 'Ukraine');
insert into Clientes (ID, Nombre, Apellido, Pais) values (27, 'Yevette', 'Ethelston', 'France');
insert into Clientes (ID, Nombre, Apellido, Pais) values (28, 'Sanders', 'Fildes', 'China');
insert into Clientes (ID, Nombre, Apellido, Pais) values (29, 'Audie', 'Gutsell', 'Russia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (30, 'Emalia', 'Sposito', 'Thailand');
insert into Clientes (ID, Nombre, Apellido, Pais) values (31, 'Garner', 'Hedworth', 'Poland');
insert into Clientes (ID, Nombre, Apellido, Pais) values (32, 'Bernardina', 'Cowill', 'Indonesia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (33, 'Reamonn', 'Mansfield', 'Kyrgyzstan');
insert into Clientes (ID, Nombre, Apellido, Pais) values (34, 'Buddie', 'Klammt', 'Costa Rica');
insert into Clientes (ID, Nombre, Apellido, Pais) values (35, 'Gearalt', 'Stinton', 'South Africa');
insert into Clientes (ID, Nombre, Apellido, Pais) values (36, 'Sashenka', 'Vear', 'China');
insert into Clientes (ID, Nombre, Apellido, Pais) values (37, 'Kariotta', 'Knapman', 'Russia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (38, 'Nevsa', 'L''Hommee', 'China');
insert into Clientes (ID, Nombre, Apellido, Pais) values (39, 'Tybalt', 'Rizzardo', 'China');
insert into Clientes (ID, Nombre, Apellido, Pais) values (40, 'Marilin', 'Croft', 'New Zealand');
insert into Clientes (ID, Nombre, Apellido, Pais) values (41, 'Granger', 'Holmyard', 'Pakistan');
insert into Clientes (ID, Nombre, Apellido, Pais) values (42, 'Sholom', 'Gainsboro', 'Ukraine');
insert into Clientes (ID, Nombre, Apellido, Pais) values (43, 'Nata', 'Caveill', 'Tanzania');
insert into Clientes (ID, Nombre, Apellido, Pais) values (44, 'Emmet', 'Smallbone', 'Latvia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (45, 'Karlie', 'Lorkins', 'Iraq');
insert into Clientes (ID, Nombre, Apellido, Pais) values (46, 'Jessika', 'Sibbit', 'Russia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (47, 'Sapphira', 'Sprason', 'Indonesia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (48, 'Jasun', 'Seymer', 'New Zealand');
insert into Clientes (ID, Nombre, Apellido, Pais) values (49, 'Quent', 'Murie', 'Russia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (50, 'Blanch', 'Oland', 'Indonesia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (51, 'Irina', 'Polo', 'China');
insert into Clientes (ID, Nombre, Apellido, Pais) values (52, 'Magdalen', 'Parmley', 'Argentina');
insert into Clientes (ID, Nombre, Apellido, Pais) values (53, 'Garnette', 'Alway', 'China');
insert into Clientes (ID, Nombre, Apellido, Pais) values (54, 'Lindsy', 'Bowers', 'Greece');
insert into Clientes (ID, Nombre, Apellido, Pais) values (55, 'Claudelle', 'Bettison', 'Iceland');
insert into Clientes (ID, Nombre, Apellido, Pais) values (56, 'Aldo', 'Radbourn', 'Indonesia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (57, 'Joell', 'Marden', 'Finland');
insert into Clientes (ID, Nombre, Apellido, Pais) values (58, 'Stephie', 'Yeude', 'Indonesia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (59, 'Charline', 'Fishpond', 'Poland');
insert into Clientes (ID, Nombre, Apellido, Pais) values (60, 'Massimiliano', 'Middlebrook', 'Argentina');
insert into Clientes (ID, Nombre, Apellido, Pais) values (61, 'Merralee', 'Willstrop', 'Vietnam');
insert into Clientes (ID, Nombre, Apellido, Pais) values (62, 'Carmelle', 'Featherstonhaugh', 'Russia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (63, 'Leela', 'Chesterton', 'Russia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (64, 'Leona', 'Wakeley', 'Armenia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (65, 'Myra', 'Proswell', 'Indonesia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (66, 'Antoni', 'Mishaw', 'China');
insert into Clientes (ID, Nombre, Apellido, Pais) values (67, 'Adair', 'Muckloe', 'Thailand');
insert into Clientes (ID, Nombre, Apellido, Pais) values (68, 'Mikael', 'Stanfield', 'Argentina');
insert into Clientes (ID, Nombre, Apellido, Pais) values (69, 'Obed', 'Londesborough', 'Philippines');
insert into Clientes (ID, Nombre, Apellido, Pais) values (70, 'Gretel', 'Allsupp', 'Slovenia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (71, 'Petronille', 'Poultney', 'Sweden');
insert into Clientes (ID, Nombre, Apellido, Pais) values (72, 'Clementius', 'Pasque', 'Sweden');
insert into Clientes (ID, Nombre, Apellido, Pais) values (73, 'Betteann', 'Nanninini', 'United States');
insert into Clientes (ID, Nombre, Apellido, Pais) values (74, 'Brear', 'Barmby', 'Sweden');
insert into Clientes (ID, Nombre, Apellido, Pais) values (75, 'Charisse', 'Marzellano', 'Poland');
insert into Clientes (ID, Nombre, Apellido, Pais) values (76, 'Mozelle', 'McCrillis', 'Sweden');
insert into Clientes (ID, Nombre, Apellido, Pais) values (77, 'Christie', 'Kibbe', 'Thailand');
insert into Clientes (ID, Nombre, Apellido, Pais) values (78, 'Rollin', 'Checchetelli', 'Japan');
insert into Clientes (ID, Nombre, Apellido, Pais) values (79, 'Alvan', 'Grollmann', 'Philippines');
insert into Clientes (ID, Nombre, Apellido, Pais) values (80, 'Meris', 'Pierro', 'Sweden');
insert into Clientes (ID, Nombre, Apellido, Pais) values (81, 'Kari', 'Shippard', 'China');
insert into Clientes (ID, Nombre, Apellido, Pais) values (82, 'Kerwin', 'Marples', 'Indonesia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (83, 'Rod', 'Praundlin', 'Ukraine');
insert into Clientes (ID, Nombre, Apellido, Pais) values (84, 'Iorgo', 'Covely', 'Indonesia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (85, 'Torrance', 'Ive', 'Ukraine');
insert into Clientes (ID, Nombre, Apellido, Pais) values (86, 'Paddy', 'Duckinfield', 'Ukraine');
insert into Clientes (ID, Nombre, Apellido, Pais) values (87, 'Terry', 'Cushelly', 'Brazil');
insert into Clientes (ID, Nombre, Apellido, Pais) values (88, 'Powell', 'Ballay', 'China');
insert into Clientes (ID, Nombre, Apellido, Pais) values (89, 'Krista', 'Sallows', 'Indonesia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (90, 'Dani', 'Woodwin', 'Iran');
insert into Clientes (ID, Nombre, Apellido, Pais) values (91, 'Ailee', 'Verrier', 'Republic of the Congo');
insert into Clientes (ID, Nombre, Apellido, Pais) values (92, 'Gigi', 'Craggs', 'China');
insert into Clientes (ID, Nombre, Apellido, Pais) values (93, 'Gonzalo', 'Bomfield', 'Indonesia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (94, 'Leese', 'Simeoli', 'Brazil');
insert into Clientes (ID, Nombre, Apellido, Pais) values (95, 'Torrance', 'Streatley', 'Indonesia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (96, 'Rebeca', 'Gilbeart', 'Poland');
insert into Clientes (ID, Nombre, Apellido, Pais) values (97, 'Misti', 'Snasel', 'Netherlands');
insert into Clientes (ID, Nombre, Apellido, Pais) values (98, 'Otto', 'Smewing', 'Brazil');
insert into Clientes (ID, Nombre, Apellido, Pais) values (99, 'Pamela', 'Thoresbie', 'Indonesia');
insert into Clientes (ID, Nombre, Apellido, Pais) values (100, 'Giordano', 'Vatcher', 'China');

insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (1, 'Myrtle', 'Nock', 1396, 'Services', '05-10-1988');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (2, 'Emanuel', 'Boothby', 1663, 'Marketing', '08-03-1968');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (3, 'Sabra', 'Goldster', 2368, 'Training', '26-07-1983');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (4, 'Antonino', 'Adamski', 2365, 'Product Management', '23-05-1964');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (5, 'Alon', 'Sterzaker', 2450, 'Services', '15-11-1970');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (6, 'Stanislaw', 'Warbey', 2982, 'Research and Development', '22-02-1965');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (7, 'Krisha', 'Rosenblum', 1520, 'Accounting', '09-12-1983');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (8, 'Lois', 'Haime', 1837, 'Training', '03-12-1995');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (9, 'Reid', 'Shallow', 2654, 'Sales', '09-08-1973');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (10, 'Merrill', 'Skillern', 1572, 'Marketing', '27-12-1996');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (11, 'Guss', 'Patek', 1441, 'Accounting', '26-06-1999');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (12, 'Lu', 'Freestone', 2339, 'Human Resources', '24-03-1966');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (13, 'Antony', 'Palffy', 1674, 'Support', '27-02-1956');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (14, 'Gorden', 'Brekonridge', 2874, 'Legal', '18-04-1989');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (15, 'Angie', 'Beaford', 1941, 'Support', '13-10-1979');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (16, 'Lucio', 'Cudbird', 2454, 'Business Development', '19-12-1980');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (17, 'Liz', 'Boyse', 2781, 'Services', '13-05-1954');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (18, 'Paxon', 'St Pierre', 2077, 'Product Management', '29-12-1982');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (19, 'Jaclin', 'Tuckwood', 2451, 'Services', '02-03-1984');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (20, 'Joellen', 'Pain', 2161, 'Engineering', '03-07-1969');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (21, 'Morry', 'Rowatt', 2509, 'Support', '15-11-1973');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (22, 'Rivkah', 'Burghall', 2915, 'Support', '09-12-1958');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (23, 'Martelle', 'Davinet', 2153, 'Human Resources', '26-09-1973');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (24, 'Ruddie', 'Ruby', 2397, 'Human Resources', '21-04-1983');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (25, 'Reamonn', 'Tunesi', 1294, 'Marketing', '16-03-1962');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (26, 'Keary', 'Stubbert', 3162, 'Engineering', '29-10-1950');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (27, 'Yoshiko', 'Tribble', 2111, 'Services', '06-08-1960');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (28, 'Gerry', 'Vize', 2935, 'Training', '28-12-1966');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (29, 'Brewer', 'Ilsley', 2074, 'Accounting', '18-01-1957');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (30, 'Renae', 'Outhwaite', 1398, 'Sales', '31-08-1967');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (31, 'Sunny', 'Karolczyk', 2673, 'Training', '08-12-1984');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (32, 'Coleen', 'Gaggen', 2678, 'Services', '08-04-1983');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (33, 'Leonhard', 'Wickardt', 2680, 'Sales', '25-06-1971');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (34, 'Agneta', 'Dorkins', 3152, 'Marketing', '05-10-1994');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (35, 'Julissa', 'Cordero', 2413, 'Research and Development', '14-04-1999');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (36, 'Emilia', 'Errington', 1565, 'Business Development', '02-04-1997');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (37, 'Vernor', 'Burlay', 2940, 'Product Management', '08-07-1964');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (38, 'Frederigo', 'Byham', 2843, 'Legal', '21-01-1959');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (39, 'Zsazsa', 'Hardacre', 1910, 'Engineering', '05-06-1992');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (40, 'Beverie', 'Aked', 1467, 'Business Development', '15-09-1996');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (41, 'Rouvin', 'Hatwell', 2281, 'Product Management', '16-04-1954');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (42, 'Sergei', 'Ciric', 2120, 'Support', '06-12-1971');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (43, 'Joachim', 'Mangin', 1475, 'Engineering', '28-05-1961');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (44, 'Sharlene', 'St Ledger', 2143, 'Engineering', '24-05-1951');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (45, 'Thea', 'Speek', 2634, 'Support', '31-08-1969');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (46, 'Wandie', 'Setterfield', 2063, 'Training', '27-07-1992');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (47, 'Sergio', 'Baiss', 1412, 'Engineering', '11-07-1967');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (48, 'Carolann', 'Beaves', 1959, 'Training', '18-04-1987');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (49, 'Nickie', 'Bugg', 2527, 'Legal', '23-03-1969');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (50, 'Sax', 'Togher', 2891, 'Engineering', '29-07-1955');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (51, 'Charo', 'Beatson', 1615, 'Engineering', '23-05-1985');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (52, 'Pate', 'Devereux', 3175, 'Human Resources', '16-04-1966');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (53, 'Clemente', 'O''Siaghail', 1582, 'Accounting', '16-02-1992');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (54, 'Morris', 'Sabate', 2666, 'Engineering', '24-08-1967');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (55, 'Minor', 'McGaughey', 2483, 'Marketing', '18-01-1982');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (56, 'Matilda', 'Duplan', 1223, 'Legal', '18-12-1987');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (57, 'Phil', 'Baversor', 2458, 'Business Development', '31-10-1974');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (58, 'Gus', 'Gourlay', 1945, 'Human Resources', '25-12-1951');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (59, 'Aristotle', 'Duchart', 1892, 'Services', '20-12-1987');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (60, 'Nicolea', 'Hanscome', 2991, 'Human Resources', '13-06-1959');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (61, 'Rachael', 'Kidgell', 2164, 'Sales', '24-03-1969');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (62, 'Abramo', 'Rickaby', 3056, 'Marketing', '21-04-1986');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (63, 'Kordula', 'Brogioni', 2184, 'Human Resources', '03-06-1995');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (64, 'Tove', 'Alman', 2521, 'Training', '05-10-1970');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (65, 'Grete', 'Vasyutochkin', 2139, 'Marketing', '11-06-1954');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (66, 'Rubia', 'Baylay', 1711, 'Support', '09-10-1971');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (67, 'Tristan', 'Bennetto', 1397, 'Product Management', '14-07-1978');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (68, 'Dani', 'Lilley', 3058, 'Research and Development', '25-05-1976');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (69, 'Carmelia', 'Brignell', 3111, 'Business Development', '09-05-1955');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (70, 'Tybi', 'Narraway', 1557, 'Human Resources', '18-03-1981');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (71, 'Philly', 'Longson', 1962, 'Legal', '29-03-1951');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (72, 'Westleigh', 'Haffard', 1206, 'Services', '01-01-1989');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (73, 'Agosto', 'Adnet', 2438, 'Training', '19-04-1965');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (74, 'Roselia', 'de Aguirre', 2044, 'Services', '27-10-1990');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (75, 'Loree', 'Notman', 2832, 'Marketing', '24-05-1965');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (76, 'Bentley', 'Poel', 2311, 'Legal', '15-02-1952');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (77, 'Hanni', 'Heninghem', 2412, 'Research and Development', '14-04-1954');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (78, 'Garnet', 'Hughs', 2470, 'Marketing', '17-09-1992');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (79, 'Marlin', 'Lyster', 1791, 'Services', '21-02-1995');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (80, 'Amalee', 'McClune', 1409, 'Marketing', '06-01-1980');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (81, 'Waldo', 'Dodman', 2741, 'Training', '23-10-1965');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (82, 'Faith', 'Shorto', 2740, 'Business Development', '14-06-1962');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (83, 'Tully', 'Millican', 2816, 'Human Resources', '18-09-1977');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (84, 'Harland', 'Coiley', 3059, 'Accounting', '03-04-1984');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (85, 'Sibylle', 'Dybell', 2947, 'Engineering', '30-12-1986');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (86, 'Ringo', 'Paulsson', 2669, 'Legal', '12-02-1992');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (87, 'Chip', 'Maidlow', 1929, 'Research and Development', '30-07-1958');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (88, 'Melony', 'Woodfield', 2798, 'Business Development', '20-09-1977');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (89, 'Archibald', 'Pygott', 1692, 'Product Management', '12-05-1972');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (90, 'Zelig', 'Broadbere', 2972, 'Legal', '08-04-1958');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (91, 'Kaitlynn', 'Crawley', 3117, 'Marketing', '05-02-1968');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (92, 'Tandi', 'Drewry', 1545, 'Marketing', '26-07-1951');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (93, 'Bobbye', 'Arthur', 3101, 'Services', '14-01-1980');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (94, 'Jourdain', 'Gilders', 2731, 'Research and Development', '08-09-1968');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (95, 'Davine', 'Bezzant', 1708, 'Training', '14-03-1997');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (96, 'Gustav', 'Burnside', 2726, 'Support', '28-07-1990');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (97, 'Cristabel', 'Dodgshon', 2393, 'Support', '29-06-1964');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (98, 'Dore', 'Gartshore', 2986, 'Human Resources', '14-05-1953');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (99, 'Dniren', 'Ruane', 2623, 'Human Resources', '24-01-1966');
insert into Empleados (ID, Nombre, Apellido, Salario, Departamento, Fecha_nacimiento) values (100, 'Laurent', 'Mackison', 2044, 'Marketing', '11-12-1969');

insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (1, 'Janis', 'Violet', 41, 189);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (2, 'Joletta', 'Teal', 54, 531);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (3, 'Marga', 'Goldenrod', 24, 601);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (4, 'Ethelind', 'Teal', 18, 33);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (5, 'Katrine', 'Goldenrod', 47, 178);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (6, 'Stephana', 'Maroon', 39, 314);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (7, 'Meghann', 'Maroon', 43, 323);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (8, 'Wilek', 'Puce', 22, 813);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (9, 'Queenie', 'Green', 48, 316);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (10, 'Mikel', 'Yellow', 51, 659);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (11, 'Fonz', 'Fuscia', 69, 453);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (12, 'Evin', 'Indigo', 23, 978);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (13, 'Idalia', 'Purple', 28, 913);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (14, 'Dale', 'Aquamarine', 86, 360);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (15, 'Luciana', 'Purple', 68, 580);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (16, 'Filbert', 'Purple', 50, 438);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (17, 'Judy', 'Purple', 32, 239);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (18, 'Windy', 'Aquamarine', 16, 525);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (19, 'Denni', 'Green', 64, 591);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (20, 'Al', 'Teal', 68, 681);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (21, 'Illa', 'Blue', 97, 822);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (22, 'Chaddy', 'Pink', 73, 868);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (23, 'Evanne', 'Crimson', 68, 55);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (24, 'Gena', 'Blue', 96, 467);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (25, 'Madeline', 'Crimson', 84, 551);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (26, 'Wain', 'Teal', 88, 393);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (27, 'Clay', 'Aquamarine', 64, 10);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (28, 'Christoph', 'Indigo', 55, 808);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (29, 'Ermina', 'Green', 49, 70);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (30, 'Kristina', 'Turquoise', 81, 753);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (31, 'Alaster', 'Fuscia', 43, 19);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (32, 'Hagan', 'Violet', 80, 303);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (33, 'Phillida', 'Goldenrod', 46, 621);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (34, 'Lottie', 'Indigo', 26, 373);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (35, 'Doyle', 'Khaki', 66, 984);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (36, 'Derek', 'Teal', 85, 942);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (37, 'Hildy', 'Violet', 59, 546);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (38, 'Fredrika', 'Yellow', 71, 815);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (39, 'Warren', 'Maroon', 20, 404);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (40, 'Sheryl', 'Violet', 22, 998);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (41, 'Dion', 'Goldenrod', 78, 683);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (42, 'Bobbee', 'Fuscia', 66, 76);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (43, 'Maddy', 'Blue', 16, 103);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (44, 'Feliza', 'Aquamarine', 83, 203);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (45, 'Alistair', 'Puce', 98, 981);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (46, 'Levey', 'Indigo', 65, 682);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (47, 'Patricio', 'Red', 88, 797);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (48, 'Hamel', 'Red', 34, 71);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (49, 'Farica', 'Aquamarine', 88, 113);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (50, 'Eberhard', 'Crimson', 54, 820);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (51, 'Woodrow', 'Teal', 18, 797);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (52, 'Birdie', 'Mauv', 40, 321);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (53, 'Arvie', 'Maroon', 30, 745);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (54, 'Conant', 'Red', 76, 210);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (55, 'Joseph', 'Maroon', 43, 579);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (56, 'Ora', 'Indigo', 38, 92);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (57, 'Austina', 'Khaki', 96, 77);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (58, 'Auberta', 'Pink', 14, 806);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (59, 'Winnie', 'Teal', 78, 308);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (60, 'Marion', 'Maroon', 10, 733);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (61, 'Phillie', 'Mauv', 87, 734);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (62, 'Bart', 'Turquoise', 32, 967);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (63, 'Willie', 'Turquoise', 17, 303);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (64, 'Claudio', 'Crimson', 87, 861);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (65, 'Camel', 'Crimson', 10, 447);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (66, 'Louise', 'Green', 15, 669);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (67, 'Edik', 'Violet', 27, 305);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (68, 'Mommy', 'Khaki', 24, 275);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (69, 'Koressa', 'Goldenrod', 10, 823);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (70, 'Karee', 'Crimson', 86, 654);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (71, 'Duky', 'Violet', 68, 594);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (72, 'Colas', 'Indigo', 12, 841);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (73, 'Davidde', 'Puce', 87, 785);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (74, 'Consuela', 'Maroon', 13, 949);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (75, 'Dori', 'Aquamarine', 79, 507);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (76, 'Rory', 'Puce', 70, 815);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (77, 'Wendell', 'Purple', 83, 651);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (78, 'Portie', 'Violet', 35, 675);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (79, 'Beale', 'Turquoise', 64, 456);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (80, 'Sandy', 'Pink', 58, 866);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (81, 'Camilla', 'Blue', 23, 271);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (82, 'Garner', 'Turquoise', 51, 837);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (83, 'Tabbie', 'Teal', 68, 83);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (84, 'Haley', 'Khaki', 18, 797);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (85, 'Sharleen', 'Green', 52, 311);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (86, 'Hale', 'Turquoise', 92, 934);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (87, 'Arne', 'Aquamarine', 41, 80);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (88, 'Ardenia', 'Pink', 24, 79);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (89, 'Otho', 'Purple', 73, 60);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (90, 'Waylen', 'Violet', 38, 351);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (91, 'Cordi', 'Aquamarine', 18, 344);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (92, 'Isabelle', 'Red', 40, 474);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (93, 'Chad', 'Blue', 73, 335);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (94, 'Jacki', 'Teal', 100, 222);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (95, 'Doreen', 'Fuscia', 88, 80);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (96, 'Rudyard', 'Puce', 62, 501);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (97, 'Willow', 'Goldenrod', 44, 820);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (98, 'Anallese', 'Maroon', 83, 557);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (99, 'Birch', 'Aquamarine', 97, 54);
insert into Productos (ID, Nombre, Descripcion, Precio, Stock) values (100, 'Samson', 'Crimson', 57, 987);

insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (1, 83, 1, 192, '10-05-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (2, 80, 2, 755, '31-05-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (3, 27, 3, 563, '14-02-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (4, 28, 4, 655, '18-10-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (5, 42, 5, 544, '21-11-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (6, 100, 6, 409, '02-12-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (7, 16, 7, 543, '08-11-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (8, 63, 8, 139, '13-06-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (9, 88, 9, 585, '10-03-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (10, 61, 10, 468, '14-07-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (11, 35, 11, 491, '11-11-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (12, 32, 12, 223, '24-08-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (13, 86, 13, 776, '08-08-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (14, 42, 14, 587, '29-03-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (15, 10, 15, 298, '29-01-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (16, 85, 16, 974, '12-09-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (17, 97, 17, 623, '18-11-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (18, 34, 18, 837, '30-12-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (19, 78, 19, 370, '14-01-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (20, 61, 20, 658, '24-04-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (21, 36, 21, 102, '14-08-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (22, 4, 22, 821, '08-10-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (23, 49, 23, 181, '22-05-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (24, 21, 24, 170, '20-07-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (25, 25, 25, 267, '24-04-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (26, 60, 26, 531, '15-07-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (27, 86, 27, 133, '22-04-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (28, 86, 28, 295, '18-07-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (29, 35, 29, 648, '27-04-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (30, 38, 30, 993, '11-09-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (31, 78, 31, 194, '03-11-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (32, 70, 32, 29, '16-01-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (33, 2, 33, 134, '19-06-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (34, 74, 34, 414, '13-01-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (35, 79, 35, 543, '02-02-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (36, 15, 36, 431, '04-04-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (37, 31, 37, 974, '25-10-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (38, 12, 38, 546, '05-10-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (39, 73, 39, 952, '12-12-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (40, 26, 40, 163, '11-05-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (41, 32, 41, 905, '03-07-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (42, 91, 42, 118, '01-06-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (43, 44, 43, 679, '20-03-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (44, 39, 44, 397, '28-11-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (45, 99, 45, 535, '19-08-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (46, 47, 46, 398, '30-05-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (47, 79, 47, 491, '09-01-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (48, 16, 48, 680, '13-08-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (49, 5, 49, 326, '14-08-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (50, 85, 50, 747, '18-10-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (51, 43, 51, 873, '16-09-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (52, 44, 52, 718, '29-05-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (53, 45, 53, 534, '12-11-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (54, 49, 54, 833, '03-01-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (55, 88, 55, 766, '11-12-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (56, 97, 56, 910, '27-11-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (57, 99, 57, 729, '31-12-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (58, 24, 58, 456, '03-12-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (59, 88, 59, 152, '11-01-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (60, 78, 60, 260, '10-08-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (61, 21, 61, 838, '02-01-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (62, 66, 62, 123, '01-09-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (63, 38, 63, 12, '28-10-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (64, 70, 64, 218, '15-03-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (65, 7, 65, 578, '26-01-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (66, 64, 66, 20, '02-06-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (67, 79, 67, 898, '20-03-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (68, 56, 68, 321, '29-05-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (69, 15, 69, 901, '10-01-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (70, 95, 70, 765, '03-10-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (71, 63, 71, 683, '17-02-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (72, 23, 72, 428, '14-10-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (73, 84, 73, 195, '27-02-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (74, 22, 74, 174, '24-09-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (75, 12, 75, 690, '08-05-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (76, 96, 76, 632, '14-09-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (77, 27, 77, 404, '14-11-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (78, 57, 78, 775, '27-01-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (79, 71, 79, 989, '27-05-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (80, 87, 80, 402, '05-12-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (81, 80, 81, 325, '22-05-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (82, 2, 82, 617, '06-02-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (83, 10, 83, 807, '21-11-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (84, 17, 84, 307, '01-07-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (85, 65, 85, 779, '06-09-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (86, 49, 86, 239, '09-03-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (87, 21, 87, 992, '22-03-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (88, 42, 88, 38, '03-05-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (89, 6, 89, 373, '30-04-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (90, 24, 90, 352, '07-01-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (91, 83, 91, 22, '28-05-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (92, 4, 92, 400, '11-07-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (93, 48, 93, 494, '03-05-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (94, 44, 94, 74, '05-11-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (95, 86, 95, 506, '24-08-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (96, 79, 96, 881, '04-05-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (97, 99, 97, 792, '24-10-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (98, 56, 98, 903, '21-10-2022');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (99, 7, 99, 582, '10-01-2023');
insert into Ventas (ID, Producto_ID, Cliente_ID, Cantidad, Fecha_venta) values (100, 70, 100, 71, '08-02-2023');


-- Ejercicio 1

select * from clientes

-- Ejercicio 2

select nombre, apellido, pais from clientes
where pais='España'

-- Ejercicio 3

select nombre from productos 
order by nombre asc

-- Ejercicio 4
select avg(precio) as Promedio_precios 
from productos;

-- Ejercicio 5
select Nombre,precio, Stock 
from Productos
where Precio > 50;

--  Ejercicio 6 
select nombre, salario
from empleados
where salario > 2500

--  Ejercicio 7

select nombre, apellido, departamento
from empleados
where departamento ='Sales'

--  Ejercicio 8

select sum(salario) as Suma_salarios from empleados;

--  Ejercicio 9

SELECT producto_id, cantidad FROM ventas
WHERE cantidad > 100

--  Ejercicio 10

select nombre, apellido from empleados
where nombre like 'J%'

--  Ejercicio 11

SELECT 
    AVG(
        CAST(
            SUBSTRING(
                CAST(
                    AGE( NOW(), date_of_birth) 
                AS VARCHAR),
                1,
                3
            )
        AS INTEGER)
    ) AS AGE
FROM public.person 
WHERE date_of_birth IS NOT NULL;


-- Ejercicio 12

select nombre, descripcion from productos
where descripcion ILIKE '%blue%'

--  Ejercicio 13



--  Ejercicio 14 
select nombre, stock from productos
where stock < 100

-- Ejercicio 15

select nombre,cantidad from productos
inner join ventas
on productos.id = ventas.producto_id
where cantidad between 50 and 100

--  Ejercicio 16

select sum(precio) as Suma_precios from productos

--  Ejercicio 17

select nombre, nombre from productos inner join clientes inner join ventas
on productos.id = clientes.id = ventas.producto_id

--  Ejercicio 18

SELECT nombre, apellido, fecha_nacimiento
FROM empleados
WHERE fecha_nacimiento < '1980-01-01'

-- Ejercicio 19
select nombre,cantidad from productos
inner join ventas
on productos.id = ventas.producto_id
order by cantidad desc 

--  Ejercicio 20. 

SELECT cliente.nombre, producto.nombre
FROM ventas
INNER JOIN cliente
  ON ventas.cliente_id = cliente.id
INNER JOIN productos
  ON ventas.producto_id = producto.id
WHERE EXTRACT(MONTH FROM fecha_venta ) = EXTRACT(MONTH FROM NOW())




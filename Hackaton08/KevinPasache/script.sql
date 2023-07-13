BEGIN;


CREATE TABLE IF NOT EXISTS public."Producto"
(
    "Id" bigint NOT NULL,
    "Name" character varying NOT NULL,
    "Description" character varying,
    "Price" money,
    "Caracteristicas" character varying,
    PRIMARY KEY ("Id")
);

CREATE TABLE IF NOT EXISTS public."User"
(
    "Id" bigint NOT NULL,
    "First_name" character varying NOT NULL,
    "Last_name" character varying NOT NULL,
    "User_name" character varying NOT NULL,
    "Email" character varying NOT NULL,
    "Password" character varying NOT NULL,
    "Address" character varying,
    "Rol" character varying NOT NULL
);

CREATE TABLE IF NOT EXISTS public."Comments"
(
    "Id" bigint,
    "Content" text,
    "Reported" boolean,
    "User_id" bigint,
    "Parent_id" bigint,
    "Create_at" date,
    "Product_id" bigint
);

CREATE TABLE IF NOT EXISTS public."Categories"
(
    "Id" bigint NOT NULL,
    "Name" character varying NOT NULL,
    PRIMARY KEY ("Id")
);

CREATE TABLE IF NOT EXISTS public."Payment_method"
(
    "Id" bigint,
    "Nro" character varying,
    "Cvv_card" bigint,
    "Name_card" character varying,
    "Date_card" date,
    "User_id" bigint,
    PRIMARY KEY ("Id")
);

CREATE TABLE IF NOT EXISTS public."Categories_Producto"
(
    "Categories_Id" bigint,
    "Producto_Id" bigint NOT NULL
);

CREATE TABLE IF NOT EXISTS public."Promociones"
(
    "Id" bigint,
    "Name" character varying,
    "Date_start" date,
    "Date_end" date,
    "Descuento" double precision,
    "Description" character varying,
    "Activo" boolean,
    PRIMARY KEY ("Id")
);

CREATE TABLE IF NOT EXISTS public."Promociones_Producto"
(
    "Id" bigint,
    "Promociones_Id" bigint,
    "Producto_Id" bigint NOT NULL,
    "Extra" double precision,
    PRIMARY KEY ("Id")
);

CREATE TABLE IF NOT EXISTS public."Shopping_cart"
(
    "Id" bigint,
    "Total" double precision,
    PRIMARY KEY ("Id")
);

CREATE TABLE IF NOT EXISTS public."Shopping_cart_Producto"
(
    "Shopping_cart_Id" bigint,
    "Producto_Id" bigint NOT NULL
);

CREATE TABLE IF NOT EXISTS public."Order"
(
    "Id" bigint,
    "Total" double precision,
    "User_id" bigint,
    "Payment_method" character varying,
    "Date" date,
    PRIMARY KEY ("Id")
);

CREATE TABLE IF NOT EXISTS public."Order_Producto"
(
    "Order_Id" bigint,
    "Producto_Id" bigint NOT NULL
);

CREATE TABLE IF NOT EXISTS public."Shipping"
(
    "Id" bigint,
    "Order_id" bigint,
    "Persona_recibe" character varying,
    "Address" character varying,
    "Estimated_date" date,
    "Date_shipping" date,
    "Status" character varying,
    "Description" character varying,
    PRIMARY KEY ("Id")
);

ALTER TABLE IF EXISTS public."Comments"
    ADD FOREIGN KEY ("User_id")
    REFERENCES public."User" ("Id") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Comments"
    ADD FOREIGN KEY ("Parent_id")
    REFERENCES public."Comments" ("Id") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Comments"
    ADD FOREIGN KEY ("Product_id")
    REFERENCES public."Producto" ("Id") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Payment_method"
    ADD FOREIGN KEY ("User_id")
    REFERENCES public."User" ("Id") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Categories_Producto"
    ADD FOREIGN KEY ("Categories_Id")
    REFERENCES public."Categories" ("Id") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Categories_Producto"
    ADD FOREIGN KEY ("Producto_Id")
    REFERENCES public."Producto" ("Id") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Promociones_Producto"
    ADD FOREIGN KEY ("Promociones_Id")
    REFERENCES public."Promociones" ("Id") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Promociones_Producto"
    ADD FOREIGN KEY ("Producto_Id")
    REFERENCES public."Producto" ("Id") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Shopping_cart_Producto"
    ADD FOREIGN KEY ("Shopping_cart_Id")
    REFERENCES public."Shopping_cart" ("Id") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Shopping_cart_Producto"
    ADD FOREIGN KEY ("Producto_Id")
    REFERENCES public."Producto" ("Id") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Order"
    ADD FOREIGN KEY ("User_id")
    REFERENCES public."User" ("Id") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Order_Producto"
    ADD FOREIGN KEY ("Order_Id")
    REFERENCES public."Order" ("Id") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Order_Producto"
    ADD FOREIGN KEY ("Producto_Id")
    REFERENCES public."Producto" ("Id") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Shipping"
    ADD FOREIGN KEY ("Order_id")
    REFERENCES public."Order" ("Id") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;
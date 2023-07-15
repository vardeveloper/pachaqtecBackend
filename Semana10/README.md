# BASE DE DATOS NOSQL

## MongoDB

### ¿Qué es MongoDB?

- Es una base de datos de documentos de propósito general

- Estructura los datos en documentos que son similares a objetos JSON. Disntinto a como las base de datos relacionales estructuran los datos en tablas de filas y columnas

- Los documentos ofrecen una forma flexible y conveniente para el desarrollador de trabajar con sus datos

- Los documentos pueden modelar todo desde:

  - Key-value (valores de clave)
  - Text (texto)
  - Geospatial (índices geoespaciales)
  - Time-series (series de tiempo)
  - Graph data (datos de gráficos)

- La flexibilidad de los documentos significa que podemos utilizar un formato tanto para el modelo como para los datos de consulta para cualquier aplicación.

- MongoDB proporciona drivers (controladores) en todos los principales lenagujes de programación, por lo que es fácil conectar una base de datos de MongoDB a nuestra aplicación sin importar el lenguaje de programación.

- Casos de uso:

  - E-commerce (comercio electrónico)
  - Content managment (Gestión de contenidos)
  - IoT and time-series data (datos de series temporales)
  - Trading and Payments (comercio y pagos)
  - Gaming (Juegos)
  - Mobile Apps (Aplicaciones móviles)
  - Real-time analytics and IA (Análisis en tiempo real e IA)

- Carácteristicas princiaples:

  - Escalabilidad
  - Resiliencia
  - Velocidad de desarrollo
  - Altos niveles de privacidad de datos y seguridad

### ¿Qué es un documento?

- Un documento es la unidad básica de datos en MongoDB.

### ¿Qué es una colección?

- Una colección es una agrupación de esos documnentos.

### Resumen

- En MongoDB, una base de datos es un contenedor de colecciones.

- En MongoDB, los documentos se visualizan en JSON pero se almacenan en BSON.

- BSON es una extensión de JSON que soporta tipos de datos adicionales:
  - fechas
  - números de varios tipos
  - ObjetcIds

- ObjectId es un tipo de dato que crea un identificador exclusivo para el campo requerido de ID

- El esquema flexible de MongoDB ofrece a los desarrolladores mucha libertad para modificar la estructura de los datos de sus aplicaciones sin confguración extensa o un tiempo de inactividad.

- El modelo de datos de MongoDB soporta datos polimórficos.

- De forma predeterminada, los documentos de una colección pueden contener distintos campos y tipos de valor.

- Siempre podemos restringir la estructura de esos documentos utilizando la validación de esquema opcional si es necesario.

### The MongoDB Document Model

- [Documents!](https://www.mongodb.com/docs/manual/core/document)
- [BSON Types!](https://www.mongodb.com/docs/manual/reference/bson-types)
- [Explaining BSON with Examples!](https://www.mongodb.com/basics/bson)
- [JSON and BSON!](https://www.mongodb.com/json-and-bson)

## Operaciones CRUD en MongoDB: Insertar y Buscar Documentos

- MongoDB crea automáticamente la colección si no existe
- Cada documento debe tener un campo _id y su valor debe ser exclusivo
- Si no proporciona un _id MongoDB automáticamente lo genera

### Lección 1: Inserción de documentos en una colección MongoDB

#### Insertar un único documento

Utilice ``insertOne()`` para insertar un documento en una colección. Dentro del paréntesis de ``insertOne()``, incluya un objeto que contenga los datos del documento.

```javascript
db.grades.insertOne({
  student_id: 654321,
  products: [
    {
      type: "exam",
      score: 90,
    },
    {
      type: "homework",
      score: 59,
    },
    {
      type: "quiz",
      score: 75,
    },
    {
      type: "homework",
      score: 88,
    },
  ],
  class_id: 550,
})
```

#### Insertar varios documentos

Utilice ``insertMany()`` para insertar varios documentos a la vez. Dentro de ``insertMany()``, incluya los documentos dentro de una matriz. Cada documento debe ir separado por una coma.

```JavaScript
db.grades.insertMany([
  {
    student_id: 546789,
    products: [
      {
        type: "quiz",
        score: 50,
      },
      {
        type: "homework",
        score: 70,
      },
      {
        type: "quiz",
        score: 66,
      },
      {
        type: "exam",
        score: 70,
      },
    ],
    class_id: 551,
  },
  {
    student_id: 777777,
    products: [
      {
        type: "exam",
        score: 83,
      },
      {
        type: "quiz",
        score: 59,
      },
      {
        type: "quiz",
        score: 72,
      },
      {
        type: "quiz",
        score: 67,
      },
    ],
    class_id: 550,
  },
  {
    student_id: 223344,
    products: [
      {
        type: "exam",
        score: 45,
      },
      {
        type: "homework",
        score: 39,
      },
      {
        type: "quiz",
        score: 40,
      },
      {
        type: "homework",
        score: 88,
      },
    ],
    class_id: 551,
  },
])
```

### Lección 2: Búsqueda de documentos en una colección MongoDB

#### Encontrar un documento con igualdad

Cuando se le da igualdad con un campo ``_id``, el comando ``find()`` devolverá el documento especificado que coincida con el ``_id``.

```JavaScript
db.zips.find({ _id: ObjectId("5c8eccc1caa187d17ca6ed16") })
```

#### Encontrar un documento mediante el operador ``$in``

Utilice el operador ``$in`` para seleccionar documentos en los que el valor de un campo sea igual a cualquier valor de la matriz especificada.

```JavaScript
db.zips.find({ city: { $in: ["PHOENIX", "CHICAGO"] } })
```

### Lección 3: Búsqueda de documentos mediante operadores de comparación

Revise los siguientes operadores de comparación: ``$gt``, ``$lt``, ``$lte`` y ``$gte``.

#### $gt (greater than)

Utilice el operador ``$gt`` para buscar documentos con un campo superior al valor dado. Por ejemplo:

```JavaScript
db.sales.find({ "items.price": { $gt: 50}})
```

#### $lt (less than)

Utilice el operador ``$lt`` para buscar documentos con un campo inferior al valor dado. Por ejemplo:

```JavaScript
db.sales.find({ "items.price": { $lt: 50}})
```

#### $lte (less than or equal to)

Utilice el operador ``$lte`` para buscar documentos con un campo menor o igual que el valor dado. Por ejemplo:

```JavaScript
db.sales.find({ "customer.age": { $lte: 65}})
```

#### $gte (greater than or equal to)

Utilice el operador ``$gte`` para buscar documentos con un campo mayor o igual que el valor dado. Por ejemplo:

```JavaScript
db.sales.find({ "customer.age": { $gte: 65}})
```

### Lección 4: Consultas sobre elementos de matrices en MongoDB

#### Buscar documentos con una matriz que contenga un valor especificado

En el siguiente ejemplo, "InvestmentFund" no está entre corchetes, por lo que MongoDB devuelve todos los documentos de la matriz de ``productos`` que contienen el valor especificado.

```JavaScript
db.accounts.find({ products: "InvestmentFund"})
```

#### Buscar un documento utilizando el operador ``$elemMatch``

Utilice el operador ``$elemMatch`` para buscar todos los documentos que contengan el subdocumento especificado. Por ejemplo:

```JavaScript
db.sales.find({
  items: {
    $elemMatch: { name: "laptop", price: { $gt: 800 }, quantity: { $gte: 1 } },
  },
})
```

### Lección 5: Búsqueda de documentos mediante operadores lógicos

Revise los siguientes operadores lógicos: ``$and`` implícito, ``$or`` y ``$and``.

#### Buscar un documento por ``$and`` implícito

Utilice ``$and`` implícito para seleccionar documentos que coincidan con varias expresiones. Por ejemplo:

```JavaScript
db.routes.find({ "aerolinea.nombre": "Southwest Airlines", paradas: { $gte: 1 } })
```

#### Buscar un documento con el operador ``$or``

Utilice el operador ``$or`` para seleccionar documentos que coincidan al menos con una de las expresiones incluidas. Por ejemplo:

```JavaScript
db.routes.find({
  $or: [{ dst_airport: "SEA" }, { src_airport: "SEA" }],
})
```

#### Buscar un documento utiizando el operador ``$and``

Utilice el operador ``$and`` para utilizar varias expresiones ``$or`` en la consulta.

```JavaScript
db.routes.find({
  $and: [
    { $or: [{ dst_airport: "SEA" }, { src_airport: "SEA" }] },
    { $or: [{ "airline.name": "American Airlines" }, { airplane: 320 }] },
  ]
})
```

## Operaciones CRUD en MongoDB: Reemplazar y Eliminar Documentos

### Lección 1: Reemplazar un documento en MongoDB

Para reemplazar documentos en MongoDB, utilizamos el método ``replaceOne()``. El método ``replaceOne()`` toma los siguientes parámetros:

- filter: (filtro) Una consulta que coincide con el documento a reemplazar.
- replacement: (reemplazo) El nuevo documento por el que reemplazar el anterior.
- options: (opciones) Un objeto que especifica opciones para la actualización.

Utilizamos el campo _id para filtrar el documento. En nuestro documento de reemplazo, proporcionamos el documento completo que debe insertarse en su lugar.

```JavaScript
db.books.replaceOne(
  {
    _id: ObjectId("6282afeb441a74a98dbbec4e"),
  },
  {
    title: "Data Science Fundamentals for Python and MongoDB",
    isbn: "1484235967",
    publishedDate: new Date("2018-5-10"),
    thumbnailUrl:
      "https://m.media-amazon.com/images/I/71opmUBc2wL._AC_UY218_.jpg",
    authors: ["David Paper"],
    categories: ["Data Science"],
  }
)
```

### Lección 2: Actualización de documentos MongoDB utilizando ``updateOne()``

El método ``updateOne()`` acepta un documento de filtrado, un documento de actualización y un objeto de opciones opcional. MongoDB proporciona operadores de actualización y opciones para ayudarle a actualizar documentos. En esta sección, cubriremos tres de ellos: ``$set``, ``upsert`` y ``$push``.

#### $set

El operador ``$set`` sustituye el valor de un campo por el valor especificado, como se muestra en el siguiente código:

```JavaScript
db.podcasts.updateOne(
  {
    _id: ObjectId("5e8f8f8f8f8f8f8f8f8f8f8"),
  },

  {
    $set: {
      subscribers: 98562,
    },
  }
)
```

#### upsert

La opción ``upsert`` crea un nuevo documento si ningún documento coincide con los criterios filtrados. He aquí un ejemplo:

```JavaScript
db.podcasts.updateOne(
  { title: "The Developer Hub" },
  { $set: { topics: ["databases", "MongoDB"] } },
  { upsert: true }
)
```

#### $push

El operador ``$push`` añade un nuevo valor al campo del array hosts. He aquí un ejemplo:

```JavaScript
db.podcasts.updateOne(
  { _id: ObjectId("5e8f8f8f8f8f8f8f8f8f8f8") },
  { $push: { hosts: "Nic Raboy" } }
)
```

### Lección 3: Actualización de documentos de MongoDB mediante ``findAndModify()``

El método ``findAndModify()`` se utiliza para encontrar y reemplazar un único documento en MongoDB. Acepta un documento de filtro, un documento de reemplazo y un objeto de opciones opcional. El siguiente código muestra un ejemplo:

```JavaScript
db.podcasts.findAndModify({
  query: { _id: ObjectId("6261a92dfee1ff300dc80bf1") },
  update: { $inc: { subscribers: 1 } },
  new: true,
})
```

### Lección 4: Actualización de documentos MongoDB mediante ``updateMany()``

Para actualizar múltiples documentos, utilice el método ``updateMany()``. Este método acepta un documento de filtro, un documento de actualización y un objeto de opciones opcional. El siguiente código muestra un ejemplo:

```JavaScript
db.books.updateMany(
  { publishedDate: { $lt: new Date("2019-01-01") } },
  { $set: { status: "LEGACY" } }
)
```

### Lección 5: Borrado de documentos en MongoDB

Para borrar documentos, utilice los métodos ``deleteOne()`` o ``deleteMany()``. Ambos métodos aceptan un documento de filtro y un objeto de opciones.

#### Borrar un documento

El siguiente código muestra un ejemplo del método ``deleteOne()``:

```JavaScript
db.podcasts.deleteOne({ _id: Objectid("6282c9862acb966e76bbf20a") })
```

#### Borrar muchos documentos

El siguiente código muestra un ejemplo del método ``deleteMany()``:

```JavaScript
db.podcasts.deleteMany({category: "crime"})
```

## Operaciones CRUD en MongoDB: Modificación de resultados de consultas

### Lección 1: Ordenación y limitación de resultados de consultas en MongoDB

Revise el siguiente código, que muestra cómo ordenar y limitar los resultados de una consulta.

#### Ordenando resultados

Utilice ``cursor.sort()`` para devolver los resultados de la consulta en un orden específico. Dentro de los paréntesis de ``sort()``, incluya un objeto que especifique el campo(s) por el que se va a ordenar y el orden de la ordenación. Utilice 1 para el orden ascendente y -1 para el descendente.

Sintaxis:

```JavaScript
db.collection.find(<query>).sort(<sort>)
```

Ejemplo:

```JavaScript
// Devuelve los datos de todas las empresas musicales, ordenadas alfabéticamente de la A a la Z.
db.companies.find({ category_code: "music" }).sort({ name: 1 });
```

Para garantizar que los documentos se devuelven en un orden coherente, incluya un campo que contenga valores únicos en la ordenación. Una forma sencilla de hacerlo es incluir el campo ``_id`` en la ordenación. He aquí un ejemplo:

```JavaScript
// Devuelve los datos de todas las compañías de música, ordenadas alfabéticamente de la A a la Z. Asegura un orden de clasificación consistente
db.companies.find({ category_code: "music" }).sort({ name: 1, _id: 1 });
```

#### Limitación de resultados

Utilice ``cursor.limit()`` para devolver los resultados de la consulta en un orden especificado. Entre los paréntesis de ``limit()``, especifique el número máximo de documentos a devolver.

Sintaxis:

```JavaScript
db.companies.find(<query>).limit(<number>)
```

Ejemplo:

```JavaScript
// Devuelve las tres empresas de música con mayor número de empleados. Asegúrese de que el orden de clasificación es coherente.
db.companies
  .find({ category_code: "music" })
  .sort({ number_of_employees: -1, _id: 1 })
  .limit(3);
```

### Lección 2: Devolución de datos específicos de una consulta en MongoDB

Revise el siguiente código, que demuestra cómo devolver campos seleccionados desde una consulta.

#### Añadir un Documento de Proyección

Para especificar los campos a incluir o excluir en el conjunto de resultados, añada un documento de proyección como segundo parámetro en la llamada a ``db.collection.find()``.

Sintaxis:

```JavaScript
db.collection.find( <query>, <projection> )
```

#### Incluir un campo

Para incluir un campo, establezca su valor en 1 en el documento de proyección.

Sintaxis:

```JavaScript
db.collection.find( <query>, { <field> : 1 })
```

Ejemplo:

```JavaScript
// Devuelve todas las inspecciones de restaurantes - sólo los campos nombre del negocio, resultado e _id
db.inspections.find(
  { sector: "Restaurant - 818" },
  { business_name: 1, result: 1 }
)
```

#### Excluir un campo

Para excluir un campo, establezca su valor en 0 en el documento de proyección.

Sintaxis:

```JavaScript
db.collection.find(query, { <field> : 0, <field>: 0 })
```

Ejemplo:

```JavaScript
// Devuelve todas las inspecciones con resultado "Aprobado" o "Advertencia" - excluye la fecha y el código postal
db.inspections.find(
  { result: { $in: ["Pass", "Warning"] } },
  { date: 0, "address.zip": 0 }
)
```

Mientras el campo ``_id`` se incluye por defecto, puede suprimirse estableciendo su valor en 0 en cualquier proyección.

```JavaScript
// Devuelve todas las inspecciones de restaurantes - sólo los campos nombre del negocio y resultado
db.inspections.find(
  { sector: "Restaurant - 818" },
  { business_name: 1, result: 1, _id: 0 }
)
```

### Lección 3: Contando Documentos en una Colección MongoDB

Revise el siguiente código, que demuestra cómo contar el número de documentos que coinciden con una consulta.

#### Contar Documentos

Utilice ``db.collection.countDocuments()`` para contar el número de documentos que coinciden con una consulta. ``countDocuments()`` toma dos parámetros: un documento de consulta y un documento de opciones.

Sintaxis:

```JavaScript
db.collection.countDocuments( <query>, <options> )
```

La consulta selecciona los documentos que se van a contar.

Ejemplos:

```JavaScript
// Contar el número de documentos en la colección de viajes
db.trips.countDocuments({})

// Contar el número de viajes de más de 120 minutos por suscriptores
db.trips.countDocuments({ tripduration: { $gt: 120 }, usertype: "Subscriber" })
```

## Agregación

- Agregación: análisis y resumen de los datos

- Etapa: una única operación sobre los datos. Una operación de agregación realizada sobre los datos

- Aggregation pipeline (canalización de agregación) proceso / tubería

- Una serie de etapas completadas una a la vez en orden.

- Podemos encadenar etapas de agregación para crear un conducto.

- Un pipeline consta de varias etapas en la que los datos se pueden:

  - filtrar
  - ordenar
  - agrupar
  - transformar.

- Los documentos que se generan de un etapa se convierten en entrada de la siguiente etapa

- Una etapa de Agregación es una operación de agregación que se realiza en lso datos y no altera permanentemente los datos de origen.

## Comandos

```JavaScript
show databases

use name_database

db.dropDatabase()

show collections

db.createCollection("name_coleccion")

db.name_collection.drop()
```

```bash
mongo --username <nombre_usuario> --password <contraseña> --authenticationDatabase <nombre_base_datos>

var conexion = new Mongo("<nombre_usuario>:<contraseña>@<direccion_servidor>:<puerto>");

Mongo("mongodb://admin:admin@mongo:27017")

use admin
```

```bash
# MongoDB Server

  mongorestore --db <database> --drop /backup.bson
  
  mongorestore --host <hostname> --port <port> --username <username> --password <password> --authenticationDatabase <auth_db> --db <database> --drop /path
  
  mongorestore --host <hostname> --port <port> --username <username> --password <password> --authenticationDatabase <auth_db> --nsInclude '<database.collection>' /path/backup.bson
```

## Resources

- [shell!](https://docs.mongodb.com/mongodb-shell/)
- [MongoDB Sample Data](https://erelbi.github.io/mongodb_sample_data/)
- [Introduction to Modern Databases with MongoDB](https://drive.google.com/drive/folders/1U9WPFkIKBLELqHj7mfh76Bw1u5eFpwqg)

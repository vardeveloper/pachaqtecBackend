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

## Aggregation (Agregación)

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

### Lección 1: Introducción a la agregación en MongoDB

Esta sección contiene definiciones clave para esta lección, así como el código para una canalización de agregación.

#### Definiciones

- ``Aggregation (Agregación)``: Recopilación y resumen de datos

- ``Stage (Etapa):`` Uno de los métodos incorporados que puede completarse sobre los datos, pero que no los altera permanentemente

- ``Aggregation pipeline (Proceso de agregación):`` Una serie de etapas que se completan sobre los datos en orden

#### Estructura de un proceso de agregación

```JavaScript
db.collection.aggregate([
    {
        $stage1: {
            { expression1 },
            { expression2 }...
        },
        $stage2: {
            { expression1 }...
        }
    }
])
```

### Lección 2: Uso de las etapas ``$match`` y ``$group`` en un proceso de agregación de MongoDB

Revise las siguientes secciones, que muestran el código para las etapas de agregación ``$match`` y ``$group``.

#### ``$match``

La etapa ``$match`` filtra los documentos que coinciden con las condiciones especificadas. Este es el código de ``$match``:

```JavaScript
{
  $match: {
     "field_name": "value"
  }
}
```

#### ``$group``

La etapa ``$group`` agrupa los documentos por una clave de grupo.

```JavaScript
{
  $group:
    {
      _id: <expression>, // Group key
      <field>: { <accumulator> : <expression> }
    }
 }
```

#### ``$match`` y ``$group`` en una canalización de agregación

La siguiente tubería de agregación encuentra los documentos con un campo llamado "state" que coincide con un valor "CA" y, a continuación, agrupa esos documentos por la clave de grupo "$city" y muestra el número total de códigos postales en el estado de California.

```JavaScript
db.zips.aggregate([
{   
   $match: { 
      state: "CA"
    }
},
{
   $group: {
      _id: "$city",
      totalZips: { $count : { } }
   }
}
])
```

### Lección 3: Uso de las etapas ``$sort`` y ``$limit`` en un proceso de agregación de MongoDB

Revise las siguientes secciones, que muestran el código para las etapas de agregación ``$sort`` y ``$limit``.

#### ``$sord``

La etapa ``$sort`` ordena todos los documentos de entrada y los devuelve a la canalización en orden. Usamos 1 para representar el orden ascendente y -1 para representar el orden descendente.

```JavaScript
{
    $sort: {
        "field_name": 1
    }
}
```

#### ``$limit``

La etapa ``$limit`` devuelve sólo un número especificado de registros.

```JavaScript
{
  $limit: 5
}
```

#### ``$sort`` y ``$limit`` en un proceso de agregación

El siguiente proceso de agregación ordena los documentos en orden descendente, de modo que los documentos con el mayor valor ``pop`` aparecen primero, y limita la salida a sólo los cinco primeros documentos después de la ordenación.

```JavaScript
db.zips.aggregate([
{
  $sort: {
    pop: -1
  }
},
{
  $limit:  5
}
])
```

### Lección 4: Uso de las etapas ``$project``, ``$count`` y ``$set`` en un proceso de agregación de MongoDB

Revise las siguientes secciones, que muestran el código para las etapas de agregación ``$project``, ``$set`` y ``$count``.

#### ``$project``

La etapa ``$project`` especifica los campos de los documentos de salida. 1 significa que el campo debe incluirse, y 0 significa que el campo debe suprimirse. También se puede asignar un nuevo valor al campo.

```JavaScript
{
    $project: {
        state:1, 
        zip:1,
        population:"$pop",
        _id:0
    }
}
```

#### ``$set``

La etapa ``$set`` crea nuevos campos o cambia el valor de los campos existentes y, a continuación, genera los documentos con los nuevos campos.

```JavaScript
{
    $set: {
        place: {
            $concat:["$city",",","$state"]
        },
        pop:10000
    }
}
```

#### ``$count``

La etapa ``$count`` crea un nuevo documento, con el número de documentos en esa etapa en la tubería de agregación asignado al nombre de campo especificado.

```JavaScript
{
  $count: "total_zips"
}
```

### Lección 5: Uso de la etapa $out en un proceso de agregación de MongoDB

#### $out

Toma los documentos devueltos por la tubería de agregación y los escribe en una colección especificada.

La etapa ``$out`` debe ser la última etapa de la canalización. El operador ``$out`` permite a la estructura de agregación devolver conjuntos de resultados de cualquier tamaño.

**Advertencia**: ``$out`` sustituye a la colección especificada si existe.

#### Sintaxis

```JavaScript
{ $out: { db: "<output-db>", coll: "<output-collection>" } }
// ó
{ $out: "<output-collection>" } // La colección de salida está en la misma base de datos
```

## Indexes (Índices)

### Lección 1: Uso de índices MongoDB en colecciones

- Los índices son estructuras de datos que mejoran el rendimiento, soportan coincidencias de igualdad eficientes y operaciones de consulta basadas en rangos, y pueden devolver resultados ordenados. Los índices consiguen esto permitiendo a MongoDB realizar solo el trabajo necesario para devolver los datos solicitados, en lugar de escanear toda la colección.

- Los índices se utilizan para agilizar las consultas de los usuarios. Una de las formas más sencillas de mejorar el rendimiento de una consulta lenta es crear índices sobre los datos que se utilizan con más frecuencia.

    Los índices ayudan a que las consultas sean más rápidas para los usuarios, ya que sólo escanean los índices para encontrar los datos solicitados.

- Los índices mejoran el rendimiento de las consultas a costa del rendimiento de la escritura. Para la mayoría de los casos de uso, esta compensación es aceptable. Los índices deben utilizarse en datos que se consultan con frecuencia o en consultas poco frecuentes pero costosas en términos de recursos informáticos.

- ``Índice de campo único``: Un índice de campo único es un índice sobre un único campo de un documento. MongoDB crea un índice de campo único en el campo ``_id`` de forma predeterminada, pero también pueden necesitarse índices adicionales para otros campos. Un índice de campo único también puede ser un índice multiclave si opera sobre un campo de matriz.

- ``Índice compuesto:`` MongoDB admite índices compuestos, en los que una única estructura de índice contiene referencias a múltiples campos dentro de los documentos de una colección. Un índice compuesto se crea especificando los campos a los que debe hacer referencia el índice, seguidos del orden en que deben ordenarse los campos. El orden de los campos en el índice es importante porque determina el orden en que se devuelven los documentos al consultar la colección. Un índice compuesto también puede ser un índice multiclave si uno de los campos es una matriz.

- ``Índice multiclave:`` Un índice multiclave es un índice sobre un campo de matriz. Cada elemento de la matriz recibe una clave de índice, lo que permite realizar consultas eficientes en los campos de la matriz. Tanto los índices de campo único como los compuestos pueden tener un campo de matriz, por lo que existen índices de campo único multiclave e índices compuestos multiclave.

### Lección 2: Creación de un índice de campo único

Revisa el siguiente código, que muestra cómo crear un índice de campo único en una colección.

#### Crear un índice de campo único

Utilice ``createIndex()`` para crear un nuevo índice en una colección. Dentro del paréntesis de ``createIndex()``, incluya un objeto que contenga el campo y el orden de clasificación.

```JavaScript
db.customers.createIndex({
  birthdate: 1
})
```

#### Crear un índice único de un solo campo

Añada ``{unique:true}`` como segundo parámetro opcional en ``createIndex()`` para forzar la unicidad en los valores de campo del índice. Una vez creado el índice único, cualquier inserción o actualización que incluya valores duplicados en la colección para el/los campo/s del índice fallará.

```JavaScript
db.customers.createIndex({
  email: 1
},
{
  unique:true
})
```

MongoDB sólo crea el índice único si no hay duplicación en los valores de campo para el/los campo/s del índice.

#### Ver los índices utilizados en una colección

Utilice ``getIndexes()`` para ver todos los índices creados en una colección.

```JavaScript
db.customers.getIndexes()
```

#### Comprobar si se está utilizando un índice en una consulta

Utilice ``explain()`` en una colección cuando ejecute una consulta para ver el plan de ejecución. Este plan proporciona los detalles de las etapas de ejecución (IXSCAN , COLLSCAN, FETCH, SORT, etc.).

- La etapa ``IXSCAN`` indica que la consulta utiliza un índice y qué índice se está seleccionando.
- La etapa ``COLLSCAN`` indica que se está realizando un escaneo de colección, sin utilizar ningún índice.
- La etapa ``FETCH`` indica que se están leyendo documentos de la colección.
- La etapa ``SORT`` indica que los documentos se están ordenando en memoria.

```JavaScript
db.customers.explain().find({
  birthdate: {
    $gt:ISODate("1995-08-01")
    }
  })

db.customers.explain().find({
  birthdate: {
    $gt:ISODate("1995-08-01")
    }
  }).sort({
    email:1
    })
```

### Lección 3: Comprender los índices multiclave

Revise el siguiente código, que demuestra cómo funcionan los índices multiclave. Si un índice de campo único o compuesto incluye un campo de matriz, entonces el índice es un índice multiclave.

#### Crear un Índice Multiclave de Campo Único

Utilice ``createIndex()`` para crear un nuevo índice en una colección. Incluya un objeto como parámetro que contenga el campo de matriz y el orden de clasificación. En este ejemplo cuentas es un campo array.

```JavaScript
db.customers.createIndex({
  accounts: 1
})
```

#### Ver los índices utilizados en una colección

Utilice ``getIndexes()`` para ver todos los índices creados en una colección.

```JavaScript
db.customers.getIndexes()
```

#### Comprobar si se está utilizando un índice en una consulta

Utilice ``explain()`` en una colección cuando ejecute una consulta para ver el plan de ejecución. Este plan proporciona los detalles de las etapas de ejecución (IXSCAN , COLLSCAN, FETCH, SORT, etc.).

- La etapa ``IXSCAN`` indica que la consulta utiliza un índice y qué índice se está seleccionando.
- La etapa ``COLLSCAN`` indica que se está realizando un escaneo de colección, sin utilizar ningún índice.
- La etapa ``FETCH`` indica que se están leyendo documentos de la colección.
- La etapa ``SORT`` indica que los documentos se están ordenando en memoria.

```JavaScript
db.customers.explain().find({
  accounts: 627788
  })
```

### Lección 4: Trabajar con índices compuestos

Revisa el siguiente código, que muestra cómo crear un índice compuesto en una colección.

#### Crear un Índice Compuesto

Utilice ``createIndex()`` para crear un nuevo índice en una colección. Dentro del paréntesis de ``createIndex()``, incluya un objeto que contenga dos o más campos y su orden de clasificación.

```JavaScript
db.customers.createIndex({
  active:1, 
  birthdate:-1,
  name:1
})
```

#### Orden de los campos en un índice compuesto

El orden de los campos es importante a la hora de crear el índice y el orden de clasificación. Se recomienda listar los campos en el siguiente orden: Igualdad, Ordenar y Rango.

- ``Equality (Igualdad)``: campo/s que coincide/n con un único valor de campo en una consulta
- ``Sort (Ordenar)``: campo/s por el/los que se ordenan los resultados en una consulta
- ``Range (Rango)``: campo/s que la consulta filtra en un rango de valores válidos

La siguiente consulta incluye una coincidencia de igualdad en el campo ``active``, una ordenación por ``birthdate`` (descendente) y ``name`` (ascendente), y una consulta de rango también por ``birthdate``.

```JavaScript
db.customers.find({
  birthdate: {
    $gte:ISODate("1977-01-01")
    },
    active:true
    }).sort({
      birthdate:-1, 
      name:1
      })
```

He aquí un ejemplo de un índice eficiente para esta consulta:

```JavaScript
db.customers.createIndex({
  active:1, 
  birthdate:-1,
  name:1
})
```

#### Ver los índices utilizados en una colección

Utilice ``getIndexes()`` para ver todos los índices creados en una colección.

```JavaScript
db.customers.getIndexes()
```

#### Comprobar si se está utilizando un índice en una consulta

Utilice ``explain()`` en una colección cuando ejecute una consulta para ver el plan de ejecución. Este plan proporciona los detalles de las etapas de ejecución (IXSCAN , COLLSCAN, FETCH, SORT, etc.). Algunas de ellas son:

- La etapa ``IXSCAN`` indica que la consulta está utilizando un índice y qué índice se está seleccionando.
- La etapa ``COLLSCAN`` indica que se está realizando un escaneo de colección, sin utilizar ningún índice.
- La etapa ``FETCH`` indica que se están leyendo documentos de la colección.
- La etapa ``SORT`` indica que los documentos se están ordenando en memoria.

```JavaScript
db.customers.explain().find({
  birthdate: {
    $gte:ISODate("1977-01-01")
    },
  active:true
  }).sort({
    birthdate:-1,
    name:1
    })
```

#### Cubrir una consulta mediante el Índice

Un índice cubre una consulta cuando MongoDB no necesita obtener los datos de la memoria puesto que todos los datos requeridos ya son devueltos por el índice.

En la mayoría de los casos, podemos utilizar proyecciones para devolver sólo los campos necesarios y cubrir la consulta. Asegúrese de que los campos de la proyección están en el índice.

Añadiendo la proyección ``{name:1,birthdate:1,_id:0}`` en la consulta anterior, podemos limitar los campos devueltos a sólo ``name`` y ``birthdate``. Estos campos forman parte del índice y cuando ejecutamos el comando ``explain()``, el plan de ejecución muestra sólo dos etapas:

- ``IXSCAN`` - Escaneo del índice utilizando el índice compuesto
- ``PROJECTION_COVERED`` - Toda la información necesaria es devuelta por el índice, no es necesario obtenerla de la memoria

```JavaScript
db.customers.explain().find({
  birthdate: {
    $gte:ISODate("1977-01-01")
    },
  active:true
  },
  {name:1,
    birthdate:1, 
    _id:0
  }).sort({
    birthdate:-1,
    name:1
    })
```

### Lección 5: Borrar un índice

Revise el siguiente código, que demuestra cómo eliminar índices en una colección.

#### Ver los Índices utilizados en una Colección

Utilice ``getIndexes()`` para ver todos los índices creados en una colección. Siempre hay un índice por defecto en cada colección sobre el campo ``_id``. Este índice es utilizado internamente por MongoDB y no puede ser eliminado.

```javascript
db.customers.getIndexes()
```

#### Borrar un índice

Utilice ``dropIndex()`` para eliminar un índice existente de una colección. Dentro del paréntesis de dropIndex(), incluya un objeto que represente la clave del índice o proporcione el nombre del índice como una cadena.

Borrar índice por nombre:

```javascript
db.customers.dropIndex(
  'active_1_birthdate_-1_name_1'
)
```

Eliminar índice por clave:

```javascript
db.customers.dropIndex({
  active:1,
  birthdate:-1, 
  name:1
})
```

#### Borrar índices

Utilice ``dropIndexes()`` para eliminar todos los índices de una colección, a excepción del índice por defecto sobre ``_id``.

```javascript
db.customers.dropIndexes()
```

El comando ``dropIndexes()`` también puede aceptar una matriz de nombres de índices como parámetro para eliminar una lista específica de índices.

```javascript
db.collection.dropIndexes([
  'index1name', 'index2name', 'index3name'
  ])
```

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

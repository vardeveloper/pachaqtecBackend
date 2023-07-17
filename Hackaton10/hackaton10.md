# Resolver los siguientes ejercicios con MongoDB

1. Insertar un documento en una colección llamada "usuarios".
```
db.usuarios.insert({"nombre" : "Paul Kevin", "apellido" : "Rengifo Sandoval", "edad" : 29})
```
2. Insertar varios documentos en la colección "usuarios".
```
db.usuarios.insert([{"nombre" : "Juan", "apellido" : "Neyra", "edad" : 29}, {"nombre" : "Jorge", "apellido" : "Tuesta", "edad" : 29}])
```
3. Actualizar el campo "edad" del documento con nombre "Juan" en la colección "usuarios".
```
db.usuarios.updateOne({"_id" : ObjectId("64b4c22b59d2a85d1a906b65")}, {$set :{"edad" : 30}})
```
4. Actualizar varios documentos en la colección "usuarios" que cumplan cierta condición.
```
db.usuarios.updateMany({}, [{ $set : { is_logged : { $eq : [ "$nombre" , "Jorge"] }} }])
```
5. Eliminar un documento con nombre "Ana" de la colección "usuarios".
```
db.usuarios.deleteOne({ nombre: "Ana" })
```
6. Eliminar varios documentos de la colección "usuarios" que cumplan cierta condición.
```
db.usuarios.deleteMany({ edad: { $lte: 28 } })
```
7. Buscar todos los documentos en la colección "usuarios".
```
db.usuarios.find()
```
8. Buscar un documento con nombre "Juan" en la colección "usuarios".
```
db.usuarios.find({ nombre: "Juan" })
```
9. Buscar documentos en la colección "usuarios" que cumplan cierta condición (por ejemplo, edad mayor a 25).
```
db.usuarios.find({ edad: { $gt: 25 } })
```
10. Buscar documentos en la colección "usuarios" con proyección (solo mostrar el campo "nombre").
```
db.usuarios.find({}, { nombre: 1, _id: 0 })
```
11. Buscar documentos en la colección "usuarios" ordenados por edad de forma ascendente.
```
db.usuarios.find().sort({ edad: 1 })
```
12. Buscar documentos en la colección "usuarios" limitando el número de resultados a 5.
```
db.usuarios.find().limit(5)
```
13. Buscar documentos en la colección "usuarios" utilizando expresiones regulares (por ejemplo, buscar nombres que empiecen con "J").
```
db.usuarios.find({ nombre: { $regex: /^J/ } })
```
14. Contar la cantidad de documentos en la colección "usuarios".
```
db.usuarios.countDocuments()
```
15. Contar la cantidad de documentos en la colección "usuarios" que cumplan cierta condición.
```
db.usuarios.countDocuments({ edad: { $gte: 30 } })
```
16. Agregar un nuevo campo "activo" con valor booleano a todos los documentos de la colección "usuarios".
```
db.usuarios.updateMany({}, { $set: { activo: true } })
```
17. Ordenar los documentos en la colección "usuarios" por nombre en orden descendente.
```
db.usuarios.find().sort({ nombre: -1 })
```
18. Buscar documentos en la colección "usuarios" que tengan una lista de ciudades específicas.
```
db.usuarios.find({ ciudad: { $in: ["Lima", "Arequipa", "Cusco"] } })
```
19. Actualizar un campo en todos los documentos de la colección "usuarios" utilizando un valor incremental.
```
db.usuarios.updateMany({}, { $inc: { campo: 1 } })
```
20. Eliminar todos los documentos de la colección "usuarios".
```
db.usuarios.deleteMany({})
```



## Consideraciones

- Crear solo un archivo con la resolución de los ejercicios.
- Desde la rama "dev" en el directorio "Hackaton10" crear una carpeta con su nombre "NombreApellido" sin espacios y en ello agregar su tarea.
- La actividad es individual, todos sin excepción deben subir su carpeta personal.
- Al generar su pull request la descripción del commit debe ser "Nombre Apellido - Hackaton10"
- URL de ejercicios: https://github.com/vardeveloper/pachaqtecBackend/tree/dev/Hackaton10

/**
 * Using Setters:
 * 
 * Un método setter se utiliza para asignar un valor a una propiedad. 
 * Se define utilizando la palabra clave "set" seguida del nombre de la propiedad. 
 * Cuando se asigna un valor a esa propiedad, se llama automáticamente al método setter, 
 * lo que permite realizar las acciones o validaciones necesarias.
 */

class Person {
    constructor(name) {
        this._name = name;
    }

    set name(value) {
        this._name = value;
    }
}

const person = new Person('Alice');
person.name = 'Bob';  // Setter method is invoked
console.log(person._name);  // Output: Bob


/**
 * En el ejemplo anterior, el método `set name(value)` nos permite establecer la propiedad nombre del objeto `Person`. 
 * Cuando asignamos un nuevo valor a `person.name`, el método setter actualiza la propiedad `_name` subyacente con el nuevo valor.
 */
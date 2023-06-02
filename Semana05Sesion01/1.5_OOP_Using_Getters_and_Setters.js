/**
 * Using Getters and Setters:
 */

class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value >= 0) {
            this._age = value;
        }
    }
}

const person = new Person('Alice', 25);
console.log(person.name);  // Output: Alice
person.name = 'Bob';
console.log(person.name);  // Output: Bob

console.log(person.age);   // Output: 25
person.age = -5;           // Setter won't update the age because it's negative
console.log(person.age);   // Output: 25

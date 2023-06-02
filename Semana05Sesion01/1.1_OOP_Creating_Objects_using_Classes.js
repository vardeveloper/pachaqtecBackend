/**
 * Creating Objects using Classes:
 */

// Define a class using the class syntax
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    startEngine() {
        console.log('Engine started!');
    }
}

// Create an instance of the Car class
const myCar = new Car('Toyota', 'Camry', 2020);

// Access properties and invoke methods
console.log(myCar.make);   // Output: Toyota
console.log(myCar.model);  // Output: Camry
console.log(myCar.year);   // Output: 2020
myCar.startEngine();       // Output: Engine started!

/**
 * Inheritance using Classes and the extends keyword:
 */

// Define a parent class
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `${this.make} ${this.model} (${this.year})`;
    }
}

// Define a child class that extends the Vehicle class
class Car extends Vehicle {
    constructor(make, model, year, color) {
        super(make, model, year);
        this.color = color;
    }

    startEngine() {
        console.log('Engine started!');
    }
}

const myCar = new Car('Toyota', 'Camry', 2020, 'Blue');
console.log(myCar.getInfo());  // Output: Toyota Camry (2020)
myCar.startEngine();           // Output: Engine started!

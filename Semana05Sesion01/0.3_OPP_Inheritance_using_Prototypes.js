/**
 *  Inheritance using Prototypes:
 */

// Define a parent constructor
function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// Add a method to the Vehicle prototype
Vehicle.prototype.getInfo = function () {
    return `${this.make} ${this.model} (${this.year})`;
};

// Define a child constructor that inherits from Vehicle
function Car(make, model, year, color) {
    Vehicle.call(this, make, model, year);
    this.color = color;
}

// Set up inheritance
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Add a method to the Car prototype
Car.prototype.startEngine = function () {
    console.log('Engine started!');
};

const myCar = new Car('Toyota', 'Camry', 2020, 'Blue');
console.log(myCar.getInfo());  // Output: Toyota Camry (2020)
myCar.startEngine();           // Output: Engine started!

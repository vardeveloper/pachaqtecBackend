/**
 *  Adding Methods to Objects using Prototypes:
 */

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// Add a method to the Car object prototype
Car.prototype.startEngine = function () {
    console.log('Engine started!');
};

const myCar = new Car('Toyota', 'Camry', 2020);
myCar.startEngine();  // Output: Engine started!

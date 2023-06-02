/**
 *  Creating Objects using Constructors:
 */

// Define a constructor function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// Create an instance of the Car object
const myCar = new Car('Toyota', 'Camry', 2020);

// Access properties of the Car object
console.log(myCar.make);   // Output: Toyota
console.log(myCar.model);  // Output: Camry
console.log(myCar.year);   // Output: 2020

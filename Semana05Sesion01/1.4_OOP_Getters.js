/**
 * Using Getters:
 * 
 * Un método getter se utiliza para recuperar el valor de una propiedad. 
 * Se define utilizando la palabra clave `get` seguida del nombre de la propiedad. 
 * Cuando se accede a la propiedad, se llama automáticamente al método getter, 
 * lo que permite devolver un valor calculado o realizar cualquier acción adicional antes de devolver el valor.
 */

class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get area() {
        return Math.PI * this._radius ** 2;
    }
}

const circle = new Circle(5);
console.log(circle.area);  // Getter method is invoked, Output: 78.53981633974483


/**
 * En el ejemplo anterior, el método `get area()` nos permite acceder a la propiedad `area` del objeto `Circle`. 
 * Cuando accedemos a `circle.area`, se llama al método getter, que calcula y devuelve el área en función del radio.
 */

¿Qué es la programación orientada a objetos (OOP)?

* La programación orientada a objetos (POO) es un paradigma de programación que organiza el código en objetos reutilizables que encapsulan datos y comportamiento. JavaScript es compatible con los principios de la programación orientada a objetos gracias a su sintaxis de objetos y a su modelo de herencia basado en prototipos. 



Programación orientada a objetos en terminos sencillos

* Imagina que tienes la tarea de describir diferentes animales. Puedes empezar enumerando sus características, como el color, el tamaño y el sonido. Por ejemplo, un perro puede describirse como "marrón, de tamaño mediano y ladra", mientras que un gato puede describirse como "gris, de tamaño pequeño y maúlla".

* En la programación orientada a objetos, organizamos nuestro código de forma similar, pero en lugar de animales, trabajamos con objetos. Un objeto es como un contenedor que contiene datos (características) y funciones (comportamiento). Llamamos a los datos "propiedades" y a las funciones "métodos".

* Tomemos el ejemplo de un coche. Un objeto coche puede tener propiedades como marca (Toyota), modelo (Camry) y año (2020). También puede tener métodos como startEngine() y stopEngine().

* La programación orientada a objetos nos permite crear una plantilla para los objetos. Este plano se llama "clase". Una clase define qué propiedades y métodos tendrá un objeto. Podemos crear múltiples objetos coche basados en este plano. Cada objeto coche tendrá sus propios valores de propiedad, pero todos compartirán los mismos métodos definidos en la clase.

* La programación orientada a objetos también nos permite organizar los objetos en relaciones. Por ejemplo, podemos tener una clase Coche y una clase Moto, ambas con sus propias propiedades y métodos específicos. Podemos decir que Coche y Moto son clases "hijas" de una clase más general "Vehículo". Esto se llama "herencia", y consiste en que las clases hijas heredan propiedades y métodos de su clase padre.

* La principal ventaja de la programación orientada a objetos es la reutilización y organización del código. En lugar de escribir el mismo código para cada coche o animal, definimos una clase una vez y creamos varios objetos basados en ella. Si necesitamos hacer cambios o añadir nuevas funcionalidades, podemos actualizar la clase, y todos los objetos basados en ella heredarán esos cambios.

* En resumen, la programación orientada a objetos es una forma de organizar el código creando objetos que tienen propiedades y métodos. Nos permite definir clases como planos para objetos, crear relaciones entre objetos y lograr la reutilización del código. Es un enfoque poderoso para construir aplicaciones complejas y hacer que el código sea más manejable y estructurado.



¿Qué significa Clase, Propiedades y Métodos, Herencia en la programación orientada a objetos?

1. Clase:
   Una clase es un plano o plantilla que define la estructura y el comportamiento de los objetos. Sirve como modelo para crear instancias de objetos con propiedades y métodos predefinidos. En términos simples, una clase define de qué estará hecho un objeto y qué puede hacer. Puedes pensar en una clase como un modelo para construir objetos de un tipo específico.

2. Propiedades y métodos:
   Las propiedades representan las características o los datos asociados a un objeto. Contienen el estado o los valores asociados con un objeto. Por ejemplo, en una clase "Car", las propiedades podrían incluir "marca", "modelo" y "año", que representan los detalles específicos de un objeto de automóvil.

   Los métodos, por otro lado, definen el comportamiento o las acciones que los objetos pueden realizar. Encapsulan la lógica y la funcionalidad asociadas con el objeto. Por ejemplo, una clase "Car" puede tener métodos como "startEngine()" y "stopEngine()" para controlar el motor del coche.

3. Herencia:
   La herencia es un mecanismo en OOP que permite a las clases heredar propiedades y métodos de otras clases. Permite la creación de una jerarquía o relación entre clases, donde una clase secundaria puede heredar las características (propiedades y métodos) de una clase padre. La clase secundaria puede agregar sus propias propiedades y métodos únicos o anular los heredados.

   La herencia promueve la reutilización del código y ayuda a crear una base de código más organizada y modular. Permite la creación de clases especializadas que heredan y amplían la funcionalidad de clases más generales.

   Por ejemplo, puede tener una clase general "Vehicle" que defina propiedades y métodos comunes para todos los vehículos. A continuación, puede crear clases más específicas como "Coche" y "Motocicleta" que heredan de la clase "Vehículo". Las clases "Coche" y "Motocicleta" tendrán sus propias propiedades y métodos únicos, al tiempo que heredarán las características compartidas de la clase "Vehículo".

En resumen, las clases proporcionan un modelo para crear objetos con propiedades y métodos predefinidos. Las propiedades representan los datos asociados a un objeto y los métodos definen el comportamiento o las acciones que pueden realizar los objetos. La herencia permite a las clases heredar y extender propiedades y métodos de otras clases, lo que permite la reutilización de código y la creación de relaciones jerárquicas entre clases. Estos conceptos son fundamentales para comprender e implementar los principios de programación orientada a objetos.



¿Qué significan setters y gettings en javascript?

* En JavaScript, los setters y getters son métodos especiales que permiten definir cómo se accede a las propiedades de un objeto y se les asignan valores. Proporcionan una forma de controlar las operaciones de lectura y escritura en las propiedades de los objetos, lo que permite añadir validación, realizar acciones adicionales o proporcionar valores calculados al interactuar con las propiedades.

- Setters:
Un método setter se utiliza para asignar un valor a una propiedad. Se define utilizando la palabra clave "set" seguida del nombre de la propiedad. Cuando se asigna un valor a esa propiedad, se llama automáticamente al método setter, lo que permite realizar las acciones o validaciones necesarias.

- Getters:
Un método getter se utiliza para recuperar el valor de una propiedad. Se define utilizando la palabra clave `get` seguida del nombre de la propiedad. Cuando se accede a la propiedad, se llama automáticamente al método getter, lo que permite devolver un valor calculado o realizar cualquier acción adicional antes de devolver el valor.

* Los setters y getters permiten controlar el acceso y la asignación de las propiedades de los objetos. Al utilizarlos, puedes asegurarte de que se accede a las propiedades o se modifican de forma controlada, realizar validaciones, implementar propiedades computadas o desencadenar acciones adicionales al interactuar con las propiedades.


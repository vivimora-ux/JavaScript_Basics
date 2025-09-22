// Reference Types
    let nombre = 'Vivi';
    let edad = 30;
    // Object
        let person = {
            nombre: 'Vivi',
            edad: '30'
        };
        // Dot Notation
        person.nombre = 'Laura';
        console.log(person.nombre);
        // Bracket Notation
        person['nombre'] = 'Migue';
        console.log(person.nombre);
    // Array
        let selectedColors = ['red', 'blue']; // Array Literal 
        selectedColors[2] = 1;
        console.log(selectedColors.length); // length - number of elements
    // Function
        function greet(name, lastName) { // name is the parameter
            console.log('Hello ' + name + ' ' + lastName);
        }
        greet('Vivi', 'Mora'); // Inside the () actual value for parameter
        // Types of functions
            // Performing a task
            function greet(name, lastName) { // name is the parameter
                console.log('Hello ' + name + ' ' + lastName);
            }
            // Calculating a value 
            function square(number) {
                return number * number;
            }
            console.log(square(2));
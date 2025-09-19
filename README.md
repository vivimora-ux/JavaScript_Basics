This is my first JavaScript code!
console.log('Hello World');

// Declaring variables (undefined by default)
    let name = 'Vivi';
    console.log(name);

    // Cannot be a reserved keyword
    // Should be meaningful
    // Cannot start with a number (1name)
    // Cannot contain a space or hyphen (-) example: let firstName [Camel Notation]
    // Are case-sensitive
    // Multiple variables // Separed by , 

// Declaring Constants

    // Value cannot change
    // If you need to reasign a variable use let
    // If you don't need to reasign a vavriable use cons

    let interestRate = 0.3;
    interestRate = 1;
    console.log(interestRate);

// Primitive/Value Types
    // String 
    // Number
    // Boolean
    // Undefined
    // Null

    let lastName = 'Vivi'; // String Literal
    let age = 30; // Number Literal
    let isApproved = false; // Boolean Literal
    let firstName = undefined;  
    let selectedColour = null; // clear value of a variable  

// Reference Types
    let nombre = 'Vivi';
    let edad = 30;
    // Onject
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
    // Function

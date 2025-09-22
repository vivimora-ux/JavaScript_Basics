// Operators
    // Arithmetic
        let x = 10;
        let y = 3;
            // console.log(x + y); Adding
            // console.log(x - y); Substraction
            // console.log(x * y); Multiplication
            // console.log(x / y); Division
            // console.log(x % y); Porcentage
            // console.log(x ** y); Exponation 
            
            // Icrement (++)
                console.log(++x);
                console.log(x++);
                console.log(x);
                console.log(x--);
                console.log(--x);
            // Decrement (--)
    // Assignment
        // x++; // Incrementing x value by 1
        // x = x + 1;   
        
        x = x + 5;
        x += 5;

        x = x * 3;
        x *= 3;


    // Comparision
    let a = 2;
        //Relational
        console.log(a > 0);
        console.log(a >= 1);
        console.log(a < 1);
        console.log(a <= 1);

        // Equality
            // Strick Equality - Same (Type + Value)
            console.log(a === 2);

            // Lose Equality 
            console.log(a == 2);

        console.log(a !== 2); // Not equal

    // Logical 
        // with Non-Booleans
            // Logical AND (&&)
                // Returns TRUE if both operands are TRUE
                console.log(true && true);

                let highIncome = true;
                let goodCreditScore = true;
                let eligibleForLoan = highIncome && goodCreditScore;
                console.log(eligibleForLoan);

            // Logical OR (||)
                // Returns TRUE if one of the operands is TRUE
                let altoIncome = false;
                let buenCreditScore = false;
                let eligibleParaLoan = altoIncome || buenCreditScore;
                console.log('Eligible', eligibleParaLoan);
            
            // NOT (!)
            let applicationRefused = !eligibleParaLoan;
            console.log('Aplication Refused', applicationRefused);
        // Falsy (false)
            // undefined
            // null 
            // 0 
            // false
            // ''
            // NaN

            // Anything that is not Falsy -> Truthy
            // Short-circuiting
            let userColour = undefined;
            let defaultColour = 'blue';
            let currentColour = userColour || defaultColour;
            console.log(currentColour);

    // Bitwise
        

    // Ternary
        // If a customer has more than 100 points
        // they are a 'gold' customer, otherwise,
        // they are a 'silver' customer. 

        let points = 90;
        let type = points > 100 ? 'gold' : 'silver'; // ? If / : Otherwise 

        console.log(type);
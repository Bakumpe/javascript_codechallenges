/**
 * Given an integer num, write a function that repeatedly 
 * adds all its 
 * digits until the result has only one digit, 
 * and return it.
 *
 */

/**
 * Solution 5
 * 
 * start the program
 * 
 * prompt the user for the input
 * 
 * reapetedly add the number until u get one digit
 * 
 * return the result digit
 * 
 * log the result in the console
 * 
 * stop the program
 */

function addDigits(){
    //prompt the user to input a number and parse it as an interger
    let input = parseInt(prompt('Input the number: '), 10);

    //Ensure the input is a valid number use IsNaN inbuilt function
    if (isNaN(input)){
        console.log('Please enter a valid number.');
        return;
    }

    //Loop to reduce the number to a single digit
    while (input >= 10) {
        input = input.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
    }
    
    //Log the result to the console
    console.log(`The single digit is: ${input}`);
}

//call the function
addDigits();
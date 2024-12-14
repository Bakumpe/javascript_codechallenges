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
 * For example
 * 
 * For input = 123:

 * Initial State: sum = 0, array = ["1", "2", "3"]

 * First Iteration: sum = 0 + Number("1") = 0 + 1 = 1

 * Second Iteration: sum = 1 + Number("2") = 1 + 2 = 3

 * Third Iteration: sum = 3 + Number("3") = 3 + 3 = 6

 * Final Result: input = 6
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
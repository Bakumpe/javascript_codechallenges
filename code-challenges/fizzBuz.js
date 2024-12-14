//Code challenge (set 1)Functions

/**
 * Question  1
 * 
 * Write a function named fizzBuzz that takes in two(2) parameters which
 *   are expected to be strings. The function should return the string Fizz if
 *  the combined length of the parameters is divisible by 3, the string Buzz
 * if it is divisible by 5, and the string FizzBuzz if it is divisible by both 5 and
3
 */

/**
 * Solution 1
 * 
 * Make the javascript function
 * 
 * prompt the user for the two strings
 * 
 * combine them and compute the length for the two strings
 * 
 * By using a conditional statememnt (If and if else)
 * 
 * Check the comibined length of the strings if they give a modulus
 * of 0 when divided by 3 and 5 
 *  
 * output the required statement as Fizzbuz, Buz, and Fizz
 * 
 * call the fuction to compute
 *
 */

function fizzBuzz(){
    //prompt the user for two strings
   let string1 = prompt("Input string 1: ");
   let string2 = prompt("Input string 2: ");

   //Calculate the combined length of both strings
    let combinedlenght = (string1 + string2).length;
    console.log(combinedlenght)

    //Check the combined lenght for Fizzbuzz conditions
    if (combinedlenght % 3 === 0 && combinedlenght % 5 === 0){
        console.log("fizzBuzz"); 
    }else if (combinedlenght % 5 === 0){
        console.log("Buzz");
    }else if(combinedlenght % 3 === 0){
        console.log("Fizz");
    }else{
        console.log("Cannot be divided by 3 or 5")
    }   
}


//call to run the fizzBuzz function
fizzBuzz()
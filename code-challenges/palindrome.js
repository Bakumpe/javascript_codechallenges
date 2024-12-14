/**
 * Question 4
 * Write a function named firstPalindrome which takes a parameter: words. 
 * Given an array of string words, return the first palindromic string in the array. 
 * If there is no such string, return an empty string "".
 * A string is palindromic if it reads the same forward and backward.
 *
 */

/**
 * Solution 
 * Start
 * 
 * Write the function firstPalindrome to log the first palindormic word
 * 
 * prompt the user for the input of string of words
 * 
 * split each string
 * 
 * trim the white spaces from each word
 * 
 * check for the palindromic effect
 * 
 * if there is none return false
 * 
 * return the first palindromic word
 * 
 * output the palindromic word in the console
 * 
 * call the function to execute
 * 
 * stop the program
 * 
 */

//Function
function firstPalindrome(){
     //prompt the user for the string array input 
     let input = prompt("Type words separeated with comas: ");
     
     //split the input
     let words = input.split(',');

     //trim each word of the white spaces
     for (let word of words){
        word = word.trim();
        let wordLength = word.length;

        //check if the word is a palindrome 
        let isPalindrome = true;
        for (let i = 0; i < wordLength / 2; i++){
            if (word[i] !== word[wordLength - 1 - i ]){
                isPalindrome = false;
                break;
            }
        }

        //return the first palindrome found
        if (isPalindrome){
            console.log(`The first palindrome is: ${word}`);
            return word;
        }
     }
     console.log('No palindrome is found');
     return null;
}

//call the function
firstPalindrome();
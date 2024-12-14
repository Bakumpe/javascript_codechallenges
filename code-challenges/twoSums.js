//Code challenge 3
/**
 * Write a function named twoSum which takes two parameters: nums
 * and target. Given an array of integer nums and an integer target, return
 * indices of the two numbers such that they add up to the target. You
 * may assume that each input would have exactly one solution, and you
 * may not use the same element twice.
 * You can return the answer in any order.
 */

/**
 * Mapping the values of an array
 * Sometimes you'll need to change all the values in an array. With the array map()
 * method you can do just that. This method will return a new array with all the new
 * values. You'll have to say how to create these new values. This can be done with the
 * arrow function. It is going to execute the arrow function for every element in the
 * array, so for example:
 * 
 * let arr = [1, 2, 3, 4];
 * let mapped_arr = arr.map(x => x + 1);
 * console.log(mapped_arr);
 * This is what the console output with the new mapped array looks like:
 * [ 2, 3, 4, 5 ]
 * Using the arrow function, the map() method has created a new array, in which each
 * of the original array values has been increased by 1.
 */

/**
 * Solution 
 * 
 * start the function
 * 
 * prompt user for numbers and target input
 * 
 * Parse the input into numbers and assign them nums and target respectively
 * 
 * Initialize a map to store the indices of the number
 * 
 * iterate over the array of numbers
 * 
 * check if the result exists in the map
 * 
 * add the number and its index to the map
 * 
 * return an empty array if no solution is found
 * 
 * call the function and log the results
 * 
 * stop the function
 */



function twoSum(){
    //prompt user for numbers and target input
    let numsInput = prompt("Enter numbers separated by coma: ");
    let targetInput = prompt("Enter the target number: ");
    
    //Parse the input into numbers and assign them nums and target respectively
    let nums = numsInput.split(',').map(Number);
    let target = Number(targetInput);

    //Initialize a map to store the indices of the number
    const numMap = new Map();

    //iterate over the array of numbers
    for (let i = 0; i < nums.length; i++){
        //This is the name of the variable being declared. It will store the result of the calculation that follows.
        const complement = target - nums[i];

        //check if the result exists in the map
        if (numMap.has(complement)){
            return[numMap.get(complement), i];
        }

        //add the number and its index to the map
        numMap.set(nums[i], i);
    }

    //return an empty array if no solution is found
    return [];
}

//Call the function and log the results
console.log(twoSum());
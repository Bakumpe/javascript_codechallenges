//function greet(){
  //  console.log("Hello world")
//}

//greet();

//function greetUser(username /*this is a parameter*/){
  //  console.log(`Hello ${username}, happy to see you`)
//}

//greetUser('Joseph' /*this is called an argument*/);
//greetUser('Bakumpe');


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
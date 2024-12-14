// Temperature converter
/**
 * Build a program that converts temperature between Fahrenheit and Celcius.
 * Include input validation to ensure numbers are entered.
 *
 * Psuedo-Code
 *
 * Assign place holder for Input temperature.
 *
 * Validate input for numbers to be entered only.
 * Call function either fahnrenheit or celcius to convert temperature.
 *
 * Output or print the result to the console.
 *
 */

function validateInput(promptMessage) {
  let value;
  while (true) {
    value = prompt(promptMessage);
    if (!isNaN(value) && value !== null && value.trim() !== "") {
      return parseFloat(value);
    }
    alert("Invalid input. Please enter a number.");
  }
}

function fahrenheitToCelsius(fahrenheit) {
  //Function computes fahrenheit to celsius
  return ((fahrenheit - 32) * 5) / 9;
}

function celsiusToFahrenheit(celsius) {
  //Function to compute celsius to fahrenheit
  return (celsius * 9) / 5 + 32;
}

function main() {
  const choice = validateInput(
    "Choose a conversion (1: Fahrenheit to Celsius, 2: Celsius to Fahrenheit):"
  );

  if (choice === 1) {
    const fahrenheit = validateInput("Enter temperature in Fahrenheit:");
    const celsius = fahrenheitToCelsius(fahrenheit);
    document.write(`${fahrenheit} Fahrenheit is ${celsius.toFixed(2)} Celsius`);
  } else if (choice === 2) {
    const celsius = validateInput("Enter temperature in Celsius:");
    const fahrenheit = celsiusToFahrenheit(celsius);
    document.write(`${celsius} Celsius is ${fahrenheit.toFixed(2)} Fahrenheit`);
  } else {
    console.log("Invalid choice. Please enter 1 or 2.");
  }
}

// Run the main function to start the program
main();

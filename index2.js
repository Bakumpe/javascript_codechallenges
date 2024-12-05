/**
 * Word Counter
 *
 * Build a program that counts words and characters in a text input. Consider handling spaces and punctuations
 *
 * Psuedo -code
 *
 * Input text
 *
 * count strings
 * count spaces
 *
 * Output total number of words and spaces
 *
 *
 */

function countCharacters(text) {
  // Count characters including spaces and punctuation
  return text.length;
}

function countWords(text) {
  // Remove punctuation for word counting
  const cleanText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim();
  // Split the text into words
  const words = cleanText.split(/\s+/);
  // Filter out any empty strings and count the remaining words
  return words.filter((word) => word.length > 0).length;
}

function main() {
  // Get input from the user
  const text = prompt("Enter your text:");

  // Count characters and words
  const numCharacters = countCharacters(text);
  const numWords = countWords(text);

  // Print results
  document.write(`Number of characters: ${numCharacters}`);
  document.write(`Number of words: ${numWords}`);
}

// Run the main function to start the program
main();

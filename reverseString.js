// Define the input string
const input = "Hello, Mentors";

// Function to reverse the string
function reverseString(input) {
  return input.split('').reverse().join('');
}

// Function to perform the reversal after a delay
function reverseAfterDelay(input) {
  setTimeout(() => {
    const reversed = reverseString(input);
    console.log("Reversed String:", reversed);
  }, 2000);
}

reverseAfterDelay(input);

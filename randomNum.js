// Define the delay in milliseconds (3 seconds)
const delay = 3000;

// Function to generate a random number after a delay
function generateRandomNumberWithDelay(delay) {
  console.log(`Generating a random number in ${delay / 1000} seconds...`);

  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
    console.log(`Random Number: ${randomNumber}`);
  }, delay);

  let countdown = delay / 1000;
  const countdownInterval = setInterval(() => {
    countdown--;
    if (countdown > 0) {
      console.log(`Time remaining: ${countdown} seconds...`);
    } else {
      clearInterval(countdownInterval);
    }
  }, 1000);
}

// Call the function to generate a random number after a delay
generateRandomNumberWithDelay(delay);

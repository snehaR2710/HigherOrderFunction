// Define the regular expression to match valid URLs
const urlPattern = /^(https?|ftp):\/\/[A-Za-z0-9.-]+(\.[A-Za-z]{2,})?(\/.*)?$/;

// Function to check if a URL matches the pattern
function isURLValid(input) {
  return urlPattern.test(input);
}

// Test URLs
const testURL1 = "http://www.example.com";
const testURL2 = "https://subdomain.example123-xyz.net";
const testURL3 = "ftp://ftp.server";
const testURL4 = "invalid-url";

// Check if the test URLs match the pattern and print messages
console.log(`URL 1 (${testURL1}): ${isURLValid(testURL1) ? 'Valid' : 'Invalid'}`);
console.log(`URL 2 (${testURL2}): ${isURLValid(testURL2) ? 'Valid' : 'Invalid'}`);
console.log(`URL 3 (${testURL3}): ${isURLValid(testURL3) ? 'Valid' : 'Invalid'}`);
console.log(`URL 4 (${testURL4}): ${isURLValid(testURL4) ? 'Valid' : 'Invalid'}`);

// Define the regular expression to match valid LinkedIn profile URLs
const linkedInProfilePattern = /^https:\/\/www\.linkedin\.com\/in\/[A-Za-z0-9_-]{5,30}[A-Za-z0-9]$/;

// Function to check if a LinkedIn profile URL is valid
function isLinkedInProfileValid(input) {
  return linkedInProfilePattern.test(input);
}

// Test LinkedIn profile URLs
const testURL1 = "https://www.linkedin.com/in/johndoe123";
const testURL2 = "https://www.linkedin.com/in/jane-doe";
const testURL3 = "https://www.linkedin.com/in/username1234_";
const testURL4 = "https://www.linkedin.com/in/short";
const testURL5 = "https://www.linkedin.com/notalinkedinurl";

// Check if the test URLs match the pattern and print messages
console.log(`URL 1 (${testURL1}): ${isLinkedInProfileValid(testURL1) ? 'Valid' : 'Invalid'}`);
console.log(`URL 2 (${testURL2}): ${isLinkedInProfileValid(testURL2) ? 'Valid' : 'Invalid'}`);
console.log(`URL 3 (${testURL3}): ${isLinkedInProfileValid(testURL3) ? 'Valid' : 'Invalid'}`);
console.log(`URL 4 (${testURL4}): ${isLinkedInProfileValid(testURL4) ? 'Valid' : 'Invalid'}`);
console.log(`URL 5 (${testURL5}): ${isLinkedInProfileValid(testURL5) ? 'Valid' : 'Invalid'}`);

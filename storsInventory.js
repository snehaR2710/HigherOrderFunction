// Define the object with item prices in USD
const pricesInUSD = {
    item1: 20,
    item2: 30,
    item3: 40,
    item4: 50,
  };
  
  // Define the exchange rate (1 USD to 80 INR)
  const exchangeRate = 80;
  
  // Function to convert prices from USD to INR
  function convertToINR(priceInUSD) {
    return priceInUSD * exchangeRate;
  }
  
  // Use the map function to create a new object with prices in INR
  const pricesInINR = Object.keys(pricesInUSD).reduce((result, item) => {
    result[item] = convertToINR(pricesInUSD[item]);
    return result;
  }, {});
  
  // Display the prices in INR
  console.log("Prices in INR:", pricesInINR);
  
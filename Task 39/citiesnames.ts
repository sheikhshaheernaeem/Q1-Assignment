function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  
  // Call the function with different city-country pairs
  const city1 = city_country("Lahore", "Pakistan");
  const city2 = city_country("Tokyo", "Japan");
  const city3 = city_country("Sydney", "Australia");
  
  // Print the formatted city names
  console.log(city1);
  console.log(city2);
  console.log(city3);
  
function describe_city(city: string, country: string = "unknown") {
    console.log(`${city} is in ${country}.`);
  }
  
  // Describe a city in the default country
  describe_city("Lahore", "Pakistan");
  
  // Describe a city in a different country
  describe_city("Tokyo", "Japan");
  
  // Describe a city with an unknown country
  describe_city("Sydney", "Australia");
  
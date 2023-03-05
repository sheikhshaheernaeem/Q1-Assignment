function describe_city(city, country) {
    if (country === void 0) { country = "unknown"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Describe a city in the default country
describe_city("Lahore", "Pakistan");
// Describe a city in a different country
describe_city("Tokyo", "Japan");
// Describe a city with an unknown country
describe_city("Sydney", "Australia");

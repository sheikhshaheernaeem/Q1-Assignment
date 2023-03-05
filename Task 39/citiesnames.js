function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the function with different city-country pairs
var city1 = city_country("Lahore", "Pakistan");
var city2 = city_country("Tokyo", "Japan");
var city3 = city_country("Sydney", "Australia");
// Print the formatted city names
console.log(city1);
console.log(city2);
console.log(city3);

var animals = ["dog", "cat", "rabbit"];
// Print out the name of each animal
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// Print out a statement about each animal
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("A ".concat(animal, " would make a great pet."));
}
// Print out what these animals have in common
console.log("Any of these animals would make a great pet because they are common household pets.");

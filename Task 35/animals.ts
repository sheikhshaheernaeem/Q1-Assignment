const animals: string[] = ["Lion", "cat", "rabbit"];

// Print out the name of each animal
for (let animal of animals) {
  console.log(animal);
}

// Print out a statement about each animal
for (let animal of animals) {
  console.log(`A ${animal} would make a great pet.`);
}

// Print out what these animals have in common
console.log(`Any of these animals would make a great pet because they are common household pets.`);

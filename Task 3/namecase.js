var personName = "John Doe";
console.log("Lowercase: ".concat(personName.toLowerCase()));
console.log("Uppercase: ".concat(personName.toUpperCase()));
console.log("Titlecase: ".concat(personName.split(" ").map(function (word) { return word[0].toUpperCase() + word.slice(1).toLowerCase(); }).join(" ")));

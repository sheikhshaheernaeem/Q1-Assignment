const personName: string = "sheikh shaheer";
console.log(`Lowercase: ${personName.toLowerCase()}`);
console.log(`Uppercase: ${personName.toUpperCase()}`);
console.log(`Titlecase: ${personName.split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ")}`);

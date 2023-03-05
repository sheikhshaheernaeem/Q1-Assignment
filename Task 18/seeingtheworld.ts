let placesToVisit: string[] = ["Japan", "New Zealand", "Peru", "Egypt", "Iceland"];

// Print original order
console.log("Original order:");
console.log(placesToVisit);

// Print alphabetical order
console.log("Alphabetical order:");
console.log([...placesToVisit].sort());

// Show that original order is still intact
console.log("Original order (again):");
console.log(placesToVisit);

// Print reverse alphabetical order
console.log("Reverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());

// Show that original order is still intact
console.log("Original order (yet again):");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:");
console.log(placesToVisit);

// Reverse the order again to return to the original order
placesToVisit.reverse();
console.log("Original order (again):");
console.log(placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Alphabetical order:");
console.log(placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Reverse alphabetical order:");
console.log(placesToVisit);

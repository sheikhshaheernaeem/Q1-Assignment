var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Japan", "New Zealand", "Peru", "Egypt", "Iceland"];
// Print original order
console.log("Original order:");
console.log(placesToVisit);
// Print alphabetical order
console.log("Alphabetical order:");
console.log(__spreadArray([], placesToVisit, true).sort());
// Show that original order is still intact
console.log("Original order (again):");
console.log(placesToVisit);
// Print reverse alphabetical order
console.log("Reverse alphabetical order:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
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
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Reverse alphabetical order:");
console.log(placesToVisit);

"use strict";
const name = "\t\n John Doe \n\t";
console.log(name); // includes whitespace characters at the beginning and end of the name
const strippedName = name.trim();
console.log(strippedName); // removes the whitespace characters from the beginning and end of the name

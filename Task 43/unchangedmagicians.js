var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    var great_magicians = [];
    for (var i = 0; i < magicians.length; i++) {
        great_magicians.push("the Great Magicians of all time are" + magicians[i]);
    }
    return great_magicians;
}
// Define an array of magicians
var magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call make_great() with a copy of the original array
var great_magicians = make_great(__spreadArray([], magicians, true));
// Call show_magicians() to print the original array of magicians
show_magicians(magicians);
// Call show_magicians() again to print the new array of great magicians
show_magicians(great_magicians);

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var guests = [
    { name: "Noor Ul Qasim ", message: "Hello Mr Qasim, I would be delighted to have you join me for dinner." },
    { name: "Nouman", message: "Hello Nouman, I would be humbled to have you join me for dinner." },
    { name: "Hassan Aslam", message: "Hello Mr Aslam, I would be honored to have you join me for dinner." }
];
console.log("Good news! I found a bigger dinner table.");
guests = __spreadArray(__spreadArray(__spreadArray(__spreadArray([
    { name: "Shumail Tariq", message: "Hello Shumail tariq, I would be honored to have you join me for dinner." }
], guests.slice(0, Math.floor(guests.length / 2)), true), [
    { name: "Fasih", message: "Hello Fasih, I would be honored to have you join me for dinner." }
], false), guests.slice(Math.floor(guests.length / 2)), true), [
    { name: "Omer Hayat", message: "Hello Omer, I would be honored to have you join me for dinner." }
], false);
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest.name, ",\n\n").concat(guest.message, "\n\nBest regards,\nSheikh Shaheer"));
});

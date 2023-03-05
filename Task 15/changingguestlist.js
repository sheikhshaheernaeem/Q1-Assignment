var guests = [
    { name: "Shumail Tariq", message: "Hello Mr Tariq, I would be honored to have you join me for dinner." },
    { name: "Fasih Washeem", message: "Hello Fasih, I would be delighted to have you join me for dinner." },
    { name: "Omer Hayat", message: "Hello Omer, I would be humbled to have you join me for dinner." }
];
var absentGuest = "Mrs Tariq";
var newGuest = "Hassan Aslam";
console.log("".concat(absentGuest, " can't make it to the dinner."));
guests.forEach(function (guest, index) {
    if (guest.name === absentGuest) {
        guests[index] = { name: newGuest, message: "Hello Professor ".concat(newGuest, ", I would be honored to have you join me for dinner.") };
    }
    console.log("Dear ".concat(guest.name, ",\n\n").concat(guest.message, "\n\nBest regards,\nSheikh Shaheer"));
});

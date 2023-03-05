// Create an array of guests to invite
var guestList = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
// Loop through the guest list and send an invitation to each guest
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\n\nYou are cordially invited to a dinner at my house on Saturday, March 12th at 6:00 PM. It would be an honor to have you as my guest. Please let me know if you can attend.\n\nSincerely,\nSheikh Shaheer"));
});

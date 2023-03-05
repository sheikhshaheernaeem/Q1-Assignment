function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("You have ordered a sandwich with the following items:");
    for (var i = 0; i < items.length; i++) {
        console.log("- " + items[i]);
    }
    console.log("Enjoy your sandwich!");
}
// Call the function with different number of arguments
makeSandwich("lettuce", "tomato", "mayo", "mustard");
makeSandwich("ham", "cheese", "mayo");
makeSandwich("peanut butter", "jelly");

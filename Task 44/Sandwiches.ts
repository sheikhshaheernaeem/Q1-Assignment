function makeSandwich(...items: string[]) {
    console.log("You have ordered a sandwich with the following items:");
    for (let i = 0; i < items.length; i++) {
      console.log("- " + items[i]);
    }
    console.log("Enjoy your sandwich!");
  }
  
  // Call the function with different number of arguments
  makeSandwich("lettuce", "tomato", "mayo", "mustard");
  makeSandwich("ham", "cheese", "mayo");
  makeSandwich("peanut butter", "jelly");
  
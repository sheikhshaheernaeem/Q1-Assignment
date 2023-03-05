type ShirtSize = "small" | "medium" | "large"; // Define the type for shirt sizes

function make_shirt(size: ShirtSize = "large", message: string = "I love TypeScript") {
  console.log(`Making a ${size} shirt with the message: "${message}"`);
}

// Creating a large shirt with the default message
make_shirt();

// Creating a medium shirt with the default message
make_shirt("medium");

// Creating a custom shirt
make_shirt("small", "Sheikh Shaheer");

function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Making a ".concat(size, " shirt with the message: \"").concat(message, "\""));
}
// Creating a large shirt with the default message
make_shirt();
// Creating a medium shirt with the default message
make_shirt("medium");
// Creating a custom shirt
make_shirt("small", "Sheikh Shaheer");

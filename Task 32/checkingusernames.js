var current_users = ['john', 'jane', 'alice', 'bob', 'charlie'];
var new_users = ['john', 'susan', 'dave', 'ALICE', 'frank'];
for (var i = 0; i < new_users.length; i++) {
    var new_username = new_users[i].toLowerCase();
    if (current_users.indexOf(new_username)) {
        console.log("Sorry, the username \"".concat(new_users[i], "\" is already taken."));
    }
    else {
        console.log("Congratulations! The username \"".concat(new_users[i], "\" is available."));
        current_users.push(new_username);
    }
}

let current_users: string[] = ['john', 'jane', 'alice', 'bob', 'charlie'];
let new_users: string[] = ['john', 'susan', 'dave', 'ALICE', 'frank'];

for (let i = 0; i < new_users.length; i++) {
  let new_username: string = new_users[i].toLowerCase();
  if (current_users.indexOf(new_username)) {
    console.log(`Sorry, the username "${new_users[i]}" is already taken.`);
  } else {
    console.log(`Congratulations! The username "${new_users[i]}" is available.`);
    current_users.push(new_username);
  }
}

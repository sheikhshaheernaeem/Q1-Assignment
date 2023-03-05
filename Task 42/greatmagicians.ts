function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
  function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = "the Great Magicians of all time are " + magicians[i];
    }
  }
  
  // Define an array of magicians
  const magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
  
  // Call make_great() to modify the array of magicians
  make_great(magicians);
  
  // Call show_magicians() to print the modified array of magicians
  show_magicians(magicians);
  
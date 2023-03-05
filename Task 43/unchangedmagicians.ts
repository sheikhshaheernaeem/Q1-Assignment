function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
  function make_great(magicians: string[]) {
    let great_magicians: string[] = [];
  
    for (let i = 0; i < magicians.length; i++) {
      great_magicians.push("the Great Magicians of all time are" + magicians[i]);
    }
  
    return great_magicians;
  }
  
  // Define an array of magicians
  const magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
  
  // Call make_great() with a copy of the original array
  const great_magicians = make_great([...magicians]);
  
  // Call show_magicians() to print the original array of magicians
  show_magicians(magicians);
  
  // Call show_magicians() again to print the new array of great magicians
  show_magicians(great_magicians);
  
interface Person {
    name: string;
    message: string;
  }
  
  let guests: Person[] = [
    { name: "Shumail Tariq", message: "Hello Mr. Tariq, I would be honored to have you join me for dinner." },
    { name: "Fasih Washeem", message: "Hello fasih, I would be delighted to have you join me for dinner." },
    { name: "Omer Hayat", message: "Hello Omer, I would be humbled to have you join me for dinner." },
    { name: "Hassan Aslam", message: "Hello Mr. Aslam, I would be honored to have you join me for dinner." },
    { name: "Noor Ul Qasim", message: "Hello Noor Ul Qasim, I would be honored to have you join me for dinner." }
  ];
  
  console.log("I'm sorry to inform you that the new dinner table won't arrive in time for the dinner, so I can invite only two people for dinner.");
  
  while (guests.length > 2) {
    const guest = guests.pop();
    console.log(`I'm sorry, ${guest.name}, but I won't be able to invite you to dinner.`);
  }
  
  guests.forEach((guest) => {
    console.log(`Dear ${guest.name},\n\n${guest.message}\n\nBest regards,\nSheikh Shaheer`);
  });
  
  guests.length = 0;
  
  console.log("The guest list is now empty:", guests);
  
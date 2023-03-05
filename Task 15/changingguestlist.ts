interface Person {
    name: string;
    message: string;
  }
  
  const guests: Person[] = [
    { name: "Shumail Tariq", message: "Hello Mr Tariq, I would be honored to have you join me for dinner." },
    { name: "Fasih Washeem", message: "Hello Fasih, I would be delighted to have you join me for dinner." },
    { name: "Omer Hayat", message: "Hello Omer, I would be humbled to have you join me for dinner." }
  ];
  
  const absentGuest = "Mrs Tariq";
  const newGuest = "Hassan Aslam";
  
  console.log(`${absentGuest} can't make it to the dinner.`);
  
  guests.forEach((guest, index) => {
    if (guest.name === absentGuest) {
      guests[index] = { name: newGuest, message: `Hello Professor ${newGuest}, I would be honored to have you join me for dinner.` };
    }
  
    console.log(`Dear ${guest.name},\n\n${guest.message}\n\nBest regards,\nSheikh Shaheer`);
  });
  
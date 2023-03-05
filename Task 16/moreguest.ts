interface Person {
    name: string;
    message: string;
  }
  
  let guests: Person[] = [
    { name: "Noor Ul Qasim ", message: "Hello Mr Qasim, I would be delighted to have you join me for dinner." },
    { name: "Nouman", message: "Hello Nouman, I would be humbled to have you join me for dinner." },
    { name: "Hassan Aslam", message: "Hello Mr Aslam, I would be honored to have you join me for dinner." }
  ];
  
  console.log("Good news! I found a bigger dinner table.");
  
  guests = [
    { name: "Shumail Tariq", message: "Hello Shumail tariq, I would be honored to have you join me for dinner." },
    ...guests.slice(0, Math.floor(guests.length / 2)),
    { name: "Fasih", message: "Hello Fasih, I would be honored to have you join me for dinner." },
    ...guests.slice(Math.floor(guests.length / 2)),
    { name: "Omer Hayat", message: "Hello Omer, I would be honored to have you join me for dinner." }
  ];
  
  guests.forEach((guest) => {
    console.log(`Dear ${guest.name},\n\n${guest.message}\n\nBest regards,\nSheikh Shaheer`);
  });
  
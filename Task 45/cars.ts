    interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any;
}

function makeCar(manufacturer: string, model: string, ...options: any[]): Car {
  let car: Car = {manufacturer, model};
  options.forEach(option => {
    const [key, value] = Object.entries(option)[0];
    car[key] = value;
  });
  return car;
}

let car1 = makeCar("Toyota", "Corolla", {color: "white"}, {year: 2022});
console.log(car1);

let car2 = makeCar("Tesla", "Model S", {color: "red"}, {autopilot: true}, {wheels: "19 inch"});
console.log(car2);

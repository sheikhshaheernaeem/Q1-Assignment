//function makeCar(manufacturer: string, model: string, color:string, ...options: { [key: string]: any }[]) {
//let car = { manufacturer: manufacturer, model: model };
//for (let i = 0; i < options.length; i++) {
//let option = options[i];
//let key = Object.keys(option)[0];
//car[key] = option[key];
//}
//return car;
//}
function makeCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (option) {
        var _a = Object.entries(option)[0], key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
var car1 = makeCar("Toyota", "Corolla", { color: "white" }, { year: 2022 });
console.log(car1);
var car2 = makeCar("Tesla", "Model S", { color: "red" }, { autopilot: true }, { wheels: "19 inch" });
console.log(car2);

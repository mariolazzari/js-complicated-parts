// Prototypes
let car1 = {
  model: "Ford",
  year: 2020,
  color: "blue",
};

function carDescription() {
  return `This is a ${this.model}.`;
}

Object.prototype.carDescription = carDescription;

// constructor
function Vehicle(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
}

let car2 = new Vehicle("Toyota", 2019, "red");
let car3 = Object.create(car2);

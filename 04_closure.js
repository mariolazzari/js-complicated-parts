// closure: function inside another function
function vehicle(power) {
  return function model(name) {
    console.log(`The car is ${name} and horse power is ${power}.`);
  };
}

//console.log(vehicle()());
const newVehicle = vehicle(100);
newVehicle("Ford");

// ex2
function calculator(x) {
  return function (y) {
    return x + y;
  };
}

const calc = calculator(1);
console.log(calc(2));

// ex3
function urlGenerator(domain) {
  return function printUrl(name) {
    return `https://${name}.${domain}`;
  };
}

const url = urlGenerator("com");
const site = url("google");
console.log(site);

// ex3
const array = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log(`index[${i}] = ${array[i]}`);
  }, 500 * i);
}

/*
for (var i = 0; i < array.length; i++) {
  setTimeout(
    (x => {
      console.log(`index[${x}] = ${array[x]}`);
    }).bind(array, i),
    500 * i
  );
}
*/

/*
for (var i = 0; i < array.length; i++) {
  (x =>
    setTimeout(() => {
      console.log(`index[${x}] = ${array[x]}`);
    }, 500 * x))(i);
}
*/

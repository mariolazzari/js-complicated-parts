// this
const moscow = {
  museums: 400,
  parks: 500,
  theathers: 390,

  logMuseums: function () {
    console.log(this === moscow);
    console.log(`In Moscow there are ${this.museums} museums.`);
  },
};

moscow.logMuseums();

// constructor
function City(city, country) {
  this.city = city;
  this.country = country;
}

const riva = new City("Riva del Garda", "Italia");
console.log(riva);

// method
City.prototype.info = function () {
  console.log(`${this.city} is in ${this.country}.`);
};
riva.info();

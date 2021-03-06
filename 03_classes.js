// Classes
class User {
  constructor(name, email, password, status, id) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.status = status;
    this.id = id;
  }

  static getID() {
    return `Static ID: 34`;
  }

  logMessage() {
    if (this.status) {
      console.log(`${this.name} is online.`);
    } else {
      console.log(`${this.name} is offline.`);
    }
  }

  // getter and setters
  get getId() {
    return this.id;
  }

  set setId(id) {
    this.id = id;
  }

  // method
  getInfo() {
    console.log(`User info:
    - Name: ${this.name}
    - Mail: ${this.email}`);
  }
}

const user1 = new User("user one", "mail1@gmail.com", "password", true);
const user2 = new User("user two", "mail2@gmail.com", "password", false);

console.log(user1);
console.log(user2);
console.log(User.getID());
user1.logMessage();
user2.logMessage();
user1.setId = 666;
console.log("User1 id:", user1.id);
user1.getInfo();

// extends
class Address extends User {
  constructor(name, email, password, status, id, country, city, street) {
    super(name, email, password, status, id);
    this.country = country;
    this.city = city;
    this.street = street;
  }

  // method
  getInfo() {
    super.getInfo();
    console.log(`
    - City: ${this.city}\n`);
  }

  job() {
    console.log("Fullstack JS dev.");
  }
}

const address = new Address(
  "Mario",
  "mario@mail.com",
  "password",
  true,
  1,
  "Italy",
  "Milan",
  "Duomo"
);

address.setId = 666;
address.getInfo();
address.job();

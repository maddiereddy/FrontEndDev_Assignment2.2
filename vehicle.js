/*
Create a class ‘Vehicle’ as base class
where define vehicle name and type using properties and
define methods to getName and getType of vehicle.
Now create 3 more class, will extend Vehicle class and uses its properties.
Create instance of these classes and display output using console.
*/

class Vehicle {
  constructor (name, type) {
    this.name = name;
    this.type = type;
  }

  getName () {
    return `Name: ${this.name}`;
  }

  getType () {
    return `Type: ${this.type}`;
  }
}

class Car extends Vehicle {
 constructor (name) {
    super(name, 'car');
  }

  getName () {
    return `It is a car: \n${super.getName()}`;
  }
}

class Motorbike extends Vehicle {
 constructor (name) {
    super(name, 'motorbike');
  }

  getName () {
    return `It is a motorbike: \n${super.getName()}`;
  }
}

class Plane extends Vehicle {
 constructor (name) {
    super(name, 'plane');
  }

  getName () {
    return `It is a plane: \n${super.getName()}`;
  }
}

let car = new Car('Ferrari');
console.log(car.getName());
console.log(car.getType());

let bike = new Motorbike('Ducati');
console.log(bike.getName());
console.log(bike.getType());

let plane = new Plane('Boeing');
console.log(plane.getName());
console.log(plane.getType());

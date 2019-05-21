'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const VehicleClass = require('./vehicle-class.js');
const VehicleFactory = require('./vehicle-factory.js');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class

const harley2 = new VehicleClass.Motorcycle('Harley', 2);
console.log(harley2.name, harley2.wheelie(), harley2.stop());

const mazda2 = new VehicleClass.Car('Mazda 2', 4);
console.log(mazda2.name, mazda2.drive(), mazda2.stop());
// Implement a car and motorcycle using a Factory
const harley3 = new VehicleFactory.MotorcycleFactory('Harley', 2);
console.log(harley3.name, harley3.wheelie(), harley3.stop());

const mazda3 = new VehicleFactory.CarFactory('Mazda 3', 4);
console.log(mazda3.name, mazda3.drive(), mazda3.stop());

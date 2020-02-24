/*
============================================
; Title:  kovar-exercise-1.4.js
; Author: Sarah Kovar
; Date:   23 February 2020
; Description: Duck typing and
; interfaces.
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 1.4'));

function Car(model) {
  this.model = model;
};

//add prototype start function
Car.prototype.start = function() {
  console.log('Car added to the racetrack');
}

//create function constructor Truck class with two parameters
function Truck(model, year) {
  this.model = model;
  this.year = year;
};

//add prototype start function
Truck.prototype.start = function() {
  console.log('Truck added to the racetrack');
};

//create function constructor Jeep class with three parameters
function Jeep(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
};

//add prototype start function
Jeep.prototype.start = function() {
  console.log('Jeep added to the racetrack')
};

//create vehicles
var camry = new Car('Camry');
var tacoma = new Truck('Tacoma', 2019);
var fj40 = new Jeep('Land Cruiser', 1977, 'blue');

//empty racetrack array
var racetrack = [];

//driveIt function with one parameter
function driveIt(vehicle) {
  vehicle.start();
  racetrack.push(vehicle);
};

//add vehicles to racetrack
driveIt(camry);
driveIt(tacoma);
driveIt(fj40);

//display vehicles on the racetrack by iterating over array
console.log('\n-- The following vehicles have been added to the racetrack --\n');
for(i = 0; i < racetrack.length; i++) {
  console.log(`${racetrack[i].constructor.name}: ${racetrack[i].model}`);
};
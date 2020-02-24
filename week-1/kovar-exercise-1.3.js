/*
============================================
; Title:  kovar-exercise-1.3.js
; Author: Sarah Kovar
; Date:   22 February 2020
; Description: Demonstrate use of object 
; literals using new keyword
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 1.3'));

function Phone(color, price) {
  this.manufacturer = 'Apple';
  this.model = 'iPhone';
  this.color = color;
  this.price = price;
  this.getPrice = function() {
    return this.price;
  };
  this.getModel = function() {
    return this.model;
  };
  this.getDetails = function() {
    return ('\n-- DISPLAYING CELL PHONE DETAILS -- \n' + 
    'Manufacturer: ' + this.manufacturer + '\n' +
    'Model: ' + this.getModel() + '\n' +
    'Color: ' + this.color + '\n' +
    'Price: $' + this.getPrice());  
  };
}

//create new cell phone object with 2 parameters
var pro11 = new Phone('Midnight Green', 999);

//output
console.log(pro11.getDetails());
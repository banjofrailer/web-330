/*
============================================
; Title:  kovar-exercise-2.2.js
; Author: Sarah Kovar
; Date:   1 March 2020
; Description: Prototype patterns.
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 2.2'));

var person = {
    getAge: function() {
      console.log("The person's age is: " + this.age);
    }
  };
  
  var coworker = Object.create(person, {
    type: {
      value: "person",
  
      enumerable: true
    },
  
    fullName: {
      value: "Bob Smith"
    },
  
    age: {
      value: 51
    }
  });
  console.log("The person's name is: " + coworker.fullName);
  
  coworker.getAge();
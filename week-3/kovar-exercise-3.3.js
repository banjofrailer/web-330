/*
============================================
; Title:  kovar-exercise-3.3.js
; Author: Sarah Kovar
; Date: 8 March 2020
; Description: JavaScript Singleton Pattern.
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 3.3'));

var DatabaseSingleton = (function() {
    var instance;
    function createInstance() {
    var postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
    }
    return {
    getInstance: function() {
    if (!instance) {
    instance = createInstance();
    }
    return instance;
    }
    }
   })();
  
   function databaseSingletonTest() {
     var postgresDatabase = DatabaseSingleton.getInstance();
     var oracleDatabase = DatabaseSingleton.getInstance();
     console.log("Same database instance? %s", postgresDatabase === oracleDatabase);
   }
  
   databaseSingletonTest();
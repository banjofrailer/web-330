/*
============================================
; Title:  kovar-exercise-3.2.js
; Author: Sarah Kovar
; Date: 8 March 2020
; Description: JavaScript Factory Pattern.
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 3.2'));

// start program
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
  }
  
  function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
  }
  
  //add Oracle constructor
  function Oracle(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "!Secret";
    this.server =  properties.server || "localhost:8080";
    this.version = properties.version || 17.4;
  }
  
  //add Informix constructor
  function Informix(properties) {
    this.username = properties.username || "info-admin";
    this.password = properties.password || "ses@me";
    this.server = properties.server || "localhost:3456";
  }
  
  function DatabaseFactory() {}
  
  DatabaseFactory.prototype.databaseClass = MySql;
  
  DatabaseFactory.prototype.createDatabase = function(properties) {
    //switch statement to determine database type
    switch(properties.databaseType) {
      case "Postgres":
        this.databaseClass = Postgres;
        break;
      case "MySql":
        this.databaseClass = MySql;
        break;
      case "Oracle":
        this.databaseClass = Oracle;
        break;
      case "Informix":
        this.databaseClass = Informix;
        break;
      default:
        this.databaseClass = Postgres;
    }
  
    return new this.databaseClass(properties);
  };
  
  var postgresFactory = new DatabaseFactory();
  var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
  });
  
  var mySqlFactory = new DatabaseFactory();
  var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySql',
    username: "default",
    password: "password"
  });
  
  //oracleFactory 
  var oracleFactory = new DatabaseFactory();
  var oracle = oracleFactory.createDatabase({
    databaseType: 'Oracle',
    username: "newuser",
    password: "S3cret"
  });
  
  //informixFactory
  var informixFactory = new DatabaseFactory();
  var informix = informixFactory.createDatabase({
    databaseType: 'Informix',
    username: "info-new-user",
    password: "0pen-s3same"
  });
  
  console.log(postgres);
  console.log(mySql);
  console.log(oracle);
  console.log(informix);
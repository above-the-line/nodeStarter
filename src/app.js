// BABLE TRANSPILING
require("@babel/core");
import "core-js/stable";
import "regenerator-runtime/runtime";

// ENV VARS
import "dotenv/config";


// IMPORTING MODULE 
import { exportedModule1, exportedModule2 } from "./modules/module1and2";


("use strict");

console.log("Welcome to a this playground. Run npm start to get going.");

console.log("ENV can be set in the .env file " + process.env.MY_VAR);

console.log("You can import and export modules thanks to Babel, see: " + exportedModule1);

exportedModule2();

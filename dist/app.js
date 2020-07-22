"use strict";

require("core-js/stable");

require("regenerator-runtime/runtime");

require("dotenv/config");

var _module1and = require("./modules/module1and2");

// BABLE TRANSPILING
require("@babel/core");

"use strict";

console.log("Welcome to a this playground. Run npm start to get going.");
console.log("ENV can be set in the .env file " + process.env.MY_VAR);
console.log("You can import and export modules thanks to Babel, see: " + _module1and.exportedModule1);
(0, _module1and.exportedModule2)();
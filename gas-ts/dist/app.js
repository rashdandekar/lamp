"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Gas_1 = require("./gas/Gas");
let a = "Hello, World!";
let myGas = new Gas_1.Gas(0.7, 0.02, 0, 0);
console.log(a, myGas.getProperties(1800, 180));
//# sourceMappingURL=app.js.map
import { Gas } from "./gas/Gas";
let a:string="Hello, World!";
let myGas:Gas = new Gas(0.7,0.02,0,0);

console.log(a,myGas.getProperties(1800,180));
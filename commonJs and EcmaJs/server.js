// --- Importing modules ---

// const { createServer } = require('node:http');

// this works on both backend plus frontend
// ECMAScript Module example (if using "type": "module" in package.json)
// you cant change name for importing name values you have to call with their actual exporting name
import { a, b, c, d, e } from "./mymodule.js";
console.log("Values:", a, b, c, d, e);

// for importing default values you can change name 
import zeyd from "./mymodule.js";
console.log(zeyd);


// CommonJS example (if using type: commonjs in package.json)
// now inporting using require === this only works on backend not on chrome
const id = require("./mymodule2.js")
console.log(id)
// in default values you can call that values with diff name


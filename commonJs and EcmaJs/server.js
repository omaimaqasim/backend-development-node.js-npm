// --- Importing modules ---

// CommonJS example (if using type: commonjs in package.json)
// const { createServer } = require('node:http');

// ECMAScript Module example (if using "type": "module" in package.json)
import { a, b, c, d, e } from "./mymodule.js";
console.log("Values:", a, b, c, d, e);

import zeyd from "./mymodule.js";
console.log(zeyd);

// now inporting using require
const id = require("./mymodule2.js")
console.log(id)
// in default values you can call that values with diff name

// --- Example basic server (commented for reference) ---

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

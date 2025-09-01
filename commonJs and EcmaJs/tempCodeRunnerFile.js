// const { createServer } = require('node:http');
// you wcan import diff modules using require that in future you can
// use its function

// if your server type is module then you cant use require as it is asynchronous

// so you will use this type of syntax 
// import http from "http"


import { a, b, c, d, e } from "./mymodule.js";

console.log("Values:", a, b, c, d, e);


import obj from "./mymodule.js";
console.log(obj);





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

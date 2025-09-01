// 📌 We import fs from "fs/promises" → gives promise-based file methods
// Using "import" means this file is treated as an ES module
import { appendFile } from "fs";
import fs from "fs/promises";

// 📌 In ES modules, Node.js supports top-level await (no need for async function)
let a = await fs.readFile("zeyn.txt");  

let b = await fs.appendFile("zeyn.txt"," \n\n\n and he is best of all time")

// 📌 The file content comes as a Buffer, so we convert to string before printing
console.log(a.toString(),b);

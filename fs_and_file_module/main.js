// ==============================
// Node.js File System (fs) Module
// ==============================
import fs from "fs"

console.log("starting");

// ------------------------------
// Synchronous Example (Blocking)
// ------------------------------
// fs.writeFileSync("zeyn.txt","zeyn is a good programmer");
// → Sync makes server wait until file is created, then "ending" runs.

// ------------------------------
// Asynchronous Example (Non-Blocking)
// ------------------------------
fs.writeFile("zeyn2.txt", "zeyn is a good programmer2", () => {
    console.log("done"); // printed after file is written

    // Reading file after it's written
    fs.readFile("zeyn2.txt", (error, data) => {
        console.log(error, data.toString()); // Convert buffer → string
    });
});

// ------------------------------
// Append Data to Existing File
// ------------------------------
fs.appendFile("zeyn2.txt", " and he is best", (e, d) => {
    console.log(d); 
    // Note: 'd' is undefined because appendFile doesn't return data
});

fs.readFile("ummi.text",(e,d)=>{
   console.log(e,d)
})

// ------------------------------
// Async nature → This prints immediately
// ------------------------------
console.log("ending");

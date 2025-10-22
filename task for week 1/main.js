import fs from "fs";
import os from "os";
import path from "path";


// creating a file
fs.writeFile("summary.txt","Hello Ummi! I’m learning Node.js 🎯", ()=>{
    console.log("done creating file")
})

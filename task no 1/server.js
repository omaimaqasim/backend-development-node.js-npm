import fs from "fs"

import path from "path"


const dirPath = path.join(process.cwd(), "myfiles");
console.log(dirPath)

// read files in dir folder
fs.readdir(dirPath,(e,d)=>{
    console.log(d)
})

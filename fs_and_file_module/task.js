import fs from "fs"

console.log("starting task")

fs.writeFile("greet.txt" , "hello Ummi!" ,()=>{
    console.log("greet file create successfully!")
})
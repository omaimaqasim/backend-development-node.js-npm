import fs from "fs"

function greet() {
    fs.writeFile("greet.txt" , "hello Ummi!" ,()=>{
        console.log("greet file create successfully!")
    })
    
}

export {greet}
// if you didnt set your type to module then just save module to .mjs 
// it will tell js automatically to treat that file like ES module


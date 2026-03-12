import fileSystem from "fs";
import fs from "fs/promises";

// remember this promises does not accept callback so use then
fileSystem.writeFile("student.txt"," ali \n ahmed \n zara \n zeyd",(err)=>{
     if(err) throw err;
    console.log("file successfully created! \n");

})




fileSystem.readFile("student.txt",(e,d)=>{
    console.log("students : \n"+d.toString())
})

// appending students append file does ot return data
 await fs.appendFile("student.txt","\n zeyn \n zehra") 
//    why use await bcause all are async fn so compiler real file before
// append that why we use await


// again read file
fileSystem.readFile("student.txt",(e,d)=>{
    console.log(d.toString().split("\n"))
    console.log(d.toString().split("\n").length)
})

// append current date with time after every execution

let now_time = new Date();

await fs.appendFile("log.txt", "\nProgram executed at: " + now_time);

console.log("log updated successfully");

 


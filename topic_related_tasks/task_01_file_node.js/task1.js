import fileSystem from "fs";

// remember this promises does not accept callback so use then
fileSystem.writeFile("student.txt"," ali \n ahmed \n zara \n zeyd",()=>{
    console.log("file successfully created! \n");

})




fileSystem.readFile("student.txt",(e,d)=>{
    console.log("students : \n"+d.toString())
})

// appending students 
fileSystem.appendFile("student.txt","\n zeyn \n zehra" , (e,d)=>{
    console.log(e,d)
})

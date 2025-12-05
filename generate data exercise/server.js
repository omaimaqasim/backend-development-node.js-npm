import mongoose from "mongoose";
import express from "express"
import {record} from "./modules/EmployeeRecord.js"


const connecting = await mongoose.connect("mongodb://localhost:27017/company")
const app = express()
const port = 3000


app.get("/",(req,res)=>{

    res.send(`<h2>Generate Employee Data</h2>
        <button class = "btn" onclick = "window.location.href ='/generate'">
            Generate Data
        </button`)  
})

app.get("/generate",async(req,res)=>{

     // clear old data
    await record.deleteMany({});

  const names = ["Harry", "John", "Sara", "Mike", "Emma"];
const salaries = [45000000, 30000000, 55000000, 28000000, 60000000];
const languages = ["Python", "JavaScript", "C++", "Java", "Go"];
const cities = ["New York", "London", "Paris", "Berlin", "Tokyo"];
const managers = [true, false];

// making fn for random pick
function pickrandom(array) {
  
  return array[Math.floor(Math.random()*array.length)];
}


// using for loop for generating 10 records

for (let i = 1; i <=10; i++) {
  
  // this make obj according to schema
  const newRecords = new record({
      name : `${pickrandom(names)}`,
    salary : `${pickrandom(salaries)}`,
    language : `${pickrandom(languages)}`,
    city :`${pickrandom(cities)}`,
    isManager :`${pickrandom(managers)}`
  })
  // this save records in mongodb
     await newRecords.save()
    }
    res.send('save 10 records')

    // ❗ After res.send(), Express ends the request and you write this inside loop
    // thats why it save one record not 10 this is mistake you done

})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
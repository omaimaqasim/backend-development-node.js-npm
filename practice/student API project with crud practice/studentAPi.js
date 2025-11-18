const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('weelcome to student api!')
})

// making student variable

let students = [{id:234,name:"ummi"},{id:233,name:"zeyd"},{id:232,name:"222"}]

app.get("/students",(req,res)=>{
     res.json(students)
})
// let students = [{id:234,name:"ummi"},{id:233,name:"zeyd"},{id:232,name:"222"}]

app.get("/students",(req,res)=>{
     res.json(students)
    //  .json() can either convert object → string or string → object,
// but it depends on where it’s used if for sending obj to server then it convert to string 
// on other hand it convert to obj
})
// it convert you post student obj to string for server
app.use(express.json())

app.post('/students',(req,res)=>{
  // req.body will give you obj of what you post on url
  const newStudent = req.body;
   students.push(newstudent)
   if (!newStudent || !newStudent.id || !newStudent.name) {
    return res.status(400).send("Please provide a valid student with id and name");
}

   res.send("Added new student successfully")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
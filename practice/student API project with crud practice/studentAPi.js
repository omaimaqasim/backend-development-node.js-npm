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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
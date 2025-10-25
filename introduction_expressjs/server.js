import express from "express"
const app = express()
const port = 4000

app.get("/",(req,res)=>{
    res.send("hello ummi ")
})
app.get("/about",(req,res)=>{
    res.send("hello my name is ummi i am beginner programmer")
})
app.get("/contact",(req,res)=>{
    res.send("please contect me on insta ummiProgrammer@22")
})
// :slug is like placeholder where what you write in it it will be store to slug
app.get("/user/:name/:age",(req,res)=>{
    res.send(`Username : ${req.params.name} , age : ${req.params.age}`)
})

app.listen(port,()=>{
    console.log(`Server started successfully on port ${port}`)
})

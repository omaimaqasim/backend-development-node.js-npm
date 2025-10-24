import express from "express"
const app = express()
const port = 4000

app.get("/",(req,res)=>{
    res.send("hello ummi ")
})
app.listen(port,()=>{
    console.log(`Server started successfully on port ${port}`)
})
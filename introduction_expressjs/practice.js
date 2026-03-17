import express from "express"
const app = express()
const port = 7000


app.get("/",(req,res)=>{
    res.send("hey i am main page");
})
app.get("/about",(req,res)=>{
    res.send("hey i am about page");
})
app.get("/:name/:product",(req,res)=>{
    res.send(`hey i am ${req.params.name} of product ${req.params.product} `);
})


app.listen(port,()=>{
    console.log(`Server started successfully on port ${port}`)
})  
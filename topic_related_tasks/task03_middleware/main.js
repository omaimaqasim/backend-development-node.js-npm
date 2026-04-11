const express = require('express')
const app = express()
const port = 3500

const mymiddleware = (req,res,next)=>{
    let custom_header = "welcome to the site";
    
}


app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

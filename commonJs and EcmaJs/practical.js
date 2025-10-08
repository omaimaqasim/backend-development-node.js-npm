// qno 1 Write a small Node.js code snippet that creates a text file named notes.txt with the content "Learning Node.js!".

import fs from "fs"

fs.writeFile("note.txt" , "learning node.js !", ()=>{
    console.log("done making file notes.txt")
} )


// qno 2 Write a simple Express server that sends “Hello Ummi!” when someone visits the homepage (/).

 import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Ummi!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

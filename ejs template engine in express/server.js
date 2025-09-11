const express = require('express')
const { dirname } = require('path')
const app = express()
const port = 3000


app.set("view engine" ,"ejs")

app.get('/', (req, res) => {
    let sitename = "dior"
    let searchbar = "search now"
    // we use ejs to use these values in our websites
   res.sendFile("templates/index.html", {root:__dirname})
})

app.get('/blog/:slug', (req, res) => {
    let sitename = "dior"
    let searchbar = "search now"
   res.render("templates/blogpost.html", {root:__dirname})
})

 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

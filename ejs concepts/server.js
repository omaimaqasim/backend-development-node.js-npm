const express = require('express')
const { dirname } = require('path')
const app = express()
const port = 3000


app.set("view engine", "ejs")

app.get('/', (req, res) => {
  let sitename = "dior"
  let searchbar = "search now"
  let arr = ["zeyden" ,22,44]
  // we use ejs to use these values in our websites
  // first change is render sec change is use your values like obj key values
  // third change is make views folder and create ejs file and add these two values where you want to use
  res.render("index", { sitename: sitename, searchbar: searchbar ,arr })
// you can also write only key in obj it will work
})

app.get('/blog/:slug', (req, res) => {
  let blogtitle = "this is dior"
  let blogcontent = "dior is no one best brand"
  res.render("blogpost", { blogtitle: blogtitle, blogcontent: blogcontent })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// download extension for ejs
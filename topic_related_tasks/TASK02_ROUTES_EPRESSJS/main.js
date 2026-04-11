const express = require('express')
const app = express()
const port = 3500

const posts = require('./routes/post')

app.get('/home', (req, res) => {
  res.sendFile('templates/index.html',{root:__dirname})
})

app.get('/api', (req, res) => {
  const api ={name: "Blog API",
  version: "1.0"}
  res.json(api)
})

app.use('/posts', posts);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const express = require('express')
const { dirname } = require('node:path')
const app = express()
const port = 3500

app.get('/home', (req, res) => {
  res.sendFile('templates/index.html',{root:__dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

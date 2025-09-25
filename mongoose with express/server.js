// https://www.npmjs.com/search?q=mongodb
// this is mongodb package

// what is mongoose
// why use mongoose and diff bw mongodb and mon

// first istall mongoose and express in npm

import mongoose from "mongoose"
import express from "express"
import {todo} from "./modules/todo"

// then add you actual link of mongodb to mongoose
let a = await mongoose.connect("mongodb://localhost:27017/todo")
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


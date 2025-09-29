// https://www.npmjs.com/search?q=mongodb
// this is mongodb package

// what is mongoose
// why use mongoose and diff bw mongodb and mon

// first istall mongoose and express in npm

import mongoose from "mongoose"
import express from "express"
import { Todo } from "./modules/todo.js"

// then add you actual link of mongodb to mongoose
let a = await mongoose.connect("mongodb://localhost:27017/todo")
const app = express()
const port = 3000


// Save a todo
app.get('/', async (req, res) => {
  const newTodo = new Todo({
    title: "hay first todo",
    desc: "description of this todo",
    isdone: false
  })
  await newTodo.save()
  res.send('Todo saved!')
})

// Fetch one todo
app.get('/a', async (req, res) => {
  let foundTodo = await Todo.findOne({})
  res.json({ title: foundTodo.title, desc: foundTodo.desc })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
import express from "express"
import mongoose from "mongoose"
import {Form} from "./modules/form.js"

// how you find this link just connect to mongodb and copy connection string
let a = await mongoose.connect("mongodb://localhost:27017/Form")

const app = express()
const port = 3000

app.get('/', async(req,res)=>{

    // it will create js obj
    const newForm = new Form({
        name : "ummi",
        class : 10,
        passed : true
    })

// this line will save that obj to mongodb if it matches schema
    await newForm.save()
    res.send("form saved!")
})

app.get('/a', async (req, res) => {
  let foundForm = await Form.findOne({})
  res.json({ name: foundForm.name, class: foundForm.class })
})


app.listen(port, () => console.log(`Listening on ${port}`));


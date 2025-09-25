import mongoose from "mongoose"
const todoschema = new mongoose.Schema({
    title : string,
    desc : string,
    isdone : Boolean
})

const todo = mongoose.model("todo","todoschema")
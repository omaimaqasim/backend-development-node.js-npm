import mongoose from "mongoose"
const todoschema = new mongoose.Schema({
    title : String,
    desc : String,
    isdone : Boolean
    // if in title you write num then it will automatically convert that to string if if title is number
    // set by developer and you write string then it will show error
})

const Todo = mongoose.model("Todo",todoschema)

// Export model
export { Todo };
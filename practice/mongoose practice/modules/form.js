import mongoose from "mongoose"
const formSchema = new mongoose.Schema({
    name : String,
    class: String,
    passed: Boolean
}) 

// this line tell mongodb to make a model name form that follows forschema rules and this line save this to Form variable
const Form = mongoose.model('Form',formSchema)

export{Form}
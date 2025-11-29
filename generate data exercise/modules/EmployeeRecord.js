import mongoose from "mongoose";
const recordSchema = new mongoose.Schema({

    name : String,
    salary : Number,
    language : String,
    city : String,
    isManager : Boolean

}) 

// this model employee mongodb create collection with the name of model save
const record = mongoose.model("Employee",recordSchema);

export {record};

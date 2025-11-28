import mongoose from "mongoose";
const recordSchema = new mongoose.Schema({

    name : String,
    salary : Number,
    language : string,
    city : string,
    isManager : boolean

}) 

// this model employee mongodb create collection with the name of model save
const record = mongoose.model("Employee",recordSchema);

export {record};

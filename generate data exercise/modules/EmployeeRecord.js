import mongoose from "mongoose";
import { scheduler } from "node:timers/promises";
import { boolean } from "webidl-conversions";

const recordSchema = new mongoose.Schema({

    name : String,
    salary : Number,
    language : string,
    city : string,
    isManager : boolean

}) 

const record = mongoose.model("EmployeeRecords",recordSchema);


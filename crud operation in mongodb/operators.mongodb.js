// ================================
// MongoDB Operators Practice File
// ================================

// Switch to database
use("operatorsInMongodb")

// Create collection
db.createCollection("students")

// Insert sample data
db.students.insertMany([
  { "name": "Ali", "age": 20, "grade": "B", "subjects": ["Math", "English"] },
  { "name": "Sara", "age": 25, "grade": "A", "subjects": ["Science", "Math"] },
  { "name": "Ahmed", "age": 30, "grade": "C", "subjects": ["English", "History"] },
  { "name": "Fatima", "age": 22, "grade": "B", "subjects": ["Math", "Science"] }
])

// ================================
// 1. 🔹 Comparison Operators
// ================================

// Mini Q1: Find students whose age is greater than 20 but less than 30
db.students.find({ age: { $gt: 20, $lt: 30 } })

// $eq (equals)
db.students.find({ grade: { $eq: "A" } })

// $ne (not equal)
db.students.find({ grade: { $ne: "A" } })

// $gte (greater or equal)
db.students.find({ age: { $gte: 25 } })

// $lte (less or equal)
db.students.find({ age: { $lte: 22 } })

// ================================
// 2. 🔹 Logical Operators
// ================================

// Mini Q2: Find students who are not grade A and older than 21
db.students.find({
  $and: [ { grade: { $ne: "A" } }, { age: { $gt: 21 } } ]
})

// $or → either condition true
db.students.find({ $or: [ { age: 20 }, { grade: "C" } ] })

// $not → negates condition
db.students.find({ age: { $not: { $gt: 25 } } })

// $nor → none of conditions true
db.students.find({ $nor: [ { grade: "A" }, { age: { $lt: 22 } } ] })

// ================================
// 3. 🔹 Element Operators
// ================================

// Mini Q3: Find students who don’t have the field grade
db.students.find({ grade: { $exists: false } })

// $type → check data type
db.students.find({ age: { $type: "int" } })

// ================================
// 4. 🔹 Array Operators
// ================================

// Mini Q4: Find students whose subjects include "English"
db.students.find({ subjects: "English" })

// $in → matches any value in array
db.students.find({ grade: { $in: ["A", "C"] } })

// $nin → not in array
db.students.find({ grade: { $nin: ["A", "B"] } })

// $all → must contain all elements
db.students.find({ subjects: { $all: ["Math", "Science"] } })

// $size → exact array length
db.students.find({ subjects: { $size: 2 } })

// $elemMatch → at least one element matches condition
db.students.find({ subjects: { $elemMatch: { $eq: "Math" } } })

// ================================
// 5. 🔹 Evaluation Operators
// ================================

// Mini Q5: Find students whose name ends with "a"
db.students.find({ name: { $regex: "a$" } })

// $regex → pattern search (names starting with A)
db.students.find({ name: { $regex: "^A" } })

// $expr → compare fields or use expressions
db.students.find({ $expr: { $gt: ["$age", 24] } })

// ================================
// 6. 🔹 Update Operators
// ================================

// Mini Q6: Update Fatima’s age by adding 3 years
db.students.updateOne({ name: "Fatima" }, { $inc: { age: 3 } })

// $set → change/add value
db.students.updateOne({ name: "Ali" }, { $set: { grade: "A" } })

// $inc → increment value
db.students.updateOne({ name: "Sara" }, { $inc: { age: 1 } })

// $rename → rename field
db.students.updateOne({ name: "Ahmed" }, { $rename: { grade: "level" } })

// $unset → remove field
db.students.updateOne({ name: "Fatima" }, { $unset: { grade: "" } })

// ================================
// END OF FILE
// ================================

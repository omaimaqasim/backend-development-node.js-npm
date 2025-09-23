// every documents id is unique
use("operatorsInMongodb")

// now on you db write click and refreash then you will se crudDb with mongocencepts

db.createCollection("students")

// db.students.insertMany([
//   { "name": "Ali", "age": 20, "grade": "B", "subjects": ["Math", "English"] },
//   { "name": "Sara", "age": 25, "grade": "A", "subjects": ["Science", "Math"] },
//   { "name": "Ahmed", "age": 30, "grade": "C", "subjects": ["English", "History"] },
//   { "name": "Fatima", "age": 22, "grade": "B", "subjects": ["Math", "Science"] }
// ]
// )

// 1. 🔹 Comparison Operators

// 📌 Mini Question 1:
// Write a query to find students whose age is greater than 20 but less than 30.
console.log(db.students.find({age:{$gt : 20 ,$lt :30}}))


// 2. 🔹 Logical Operators
// 📌 Mini Question 2:
// Write a query to find students who are not grade A and are older than 21.

console.log(db.students.find({
  $and: [ { grade: { $ne: "A" } }, { age: { $gt: 21 } } ]
})
)


// 3. 🔹 Element Operators 
// 📌 Mini Question 3:
// Find students who don’t have the field grade.

db.students.find({grade:{$exists:false}})

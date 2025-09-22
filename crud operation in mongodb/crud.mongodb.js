
// every documents id is unique
use("crudDb")

// now on you db write click and refreash then you will se crudDb with mongocencepts

db.createCollection("mongoConcepts")

// // now adding data
// db.mongoConcepts.insertOne({
//     name : "ummi",
//     age : "12",
//     section : "A"
// })

// // you can also collaspe many data like this
// db.mongoConcepts.insertMany(
// [
//     {
//         name: "ummi",
//         age: "12",
//         section: "A"
//     },
//     {
//         name: "zeyden",
//         age: "13",
//         section: "B"
//     },
//     {
//         name: "aliya",
//         age: "11",
//         section: "C"
//     },
//     {
//         name: "hamza",
//         age: "14",
//         section: "A"
//     },
//     {
//         name: "sara",
//         age: "12",
//         section: "B"
//     }
// ]

// )

// // if you want some specific data then use this
// let a = db.mongoConcepts.find({section :"A"})
// console.log(a) // this will give all data that matches condition

// // this will give all collection
// console.log(a.toArray())

// // and if you want to count that data then 
// console.log(a.count())

// // and if you want first matching then use this
// let b = db.mongoConcepts.findOne({section :"A"})
// console.log(b)


// update  in mongodb
db.mongoConcepts.updateOne({section : "A"} ,{$set: {section : "A-12"}})

db.mongoConcepts.updateMany({section : "B"} ,{$set: {section : "B-13"}})

// delete in mongodb

db.mongoConcepts.deleteOne({section : "A-12"} )

db.mongoConcepts.deleteMany({section : "A"} )

db.mongoConcepts.deleteOne({name : "ummi"} )



// https://www.mongodb.com/docs/manual/ link to learn query operator in mongodb



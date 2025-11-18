// ===== SWITCH / CREATE DATABASE =====
use ('school'); // Switch to 'school' DB (creates it if not exists)


// ===== CREATE COLLECTION =====
db.createCollection("students"); // Create 'students' collection


// ===== INSERT DOCUMENTS =====
db.students.insertOne({ name: "Hamza", age: 19, course: "JS" }); 
// Insert one student document

db.students.insertMany([ 
  { name: "Zain", age: 21, course: "Python" },
  { name: "Hina", age: 23, course: "Backend" }
]);
// Insert multiple documents at once


// ===== READ / FIND DOCUMENTS =====
db.students.find(); 
// Show all documents in students collection

db.students.find({ age: { $gt: 20 } });
// Find students with age greater than 20

db.students.find({ course: "Backend" });
// Find students enrolled in Backend course

db.students.find().pretty(); 
// Show results in a clean readable format


// ===== UPDATE DOCUMENTS =====
db.students.updateOne(
  { name: "Hamza" }, 
  { $set: { age: 20 } }
);
// Update age of the document where name = Hamza

db.students.updateMany(
  { course: "Backend" },
  { $set: { verified: true } }
);
// Add "verified: true" to all Backend students


// ===== DELETE DOCUMENTS =====
db.students.deleteOne({ name: "Hina" });
// Delete the first document where name = Hina

db.students.deleteMany({ age: { $gt: 20 } });
// Delete all documents with age > 20


// ===== DROP COLLECTION / DATABASE =====
db.students.drop(); 
// Delete entire 'students' collection

db.dropDatabase(); 
// Delete the current database


// ===== EXTRA USEFUL COMMANDS =====

db.students.countDocuments();
// Count number of documents in collection

db.students.find().limit(2);
// Limit results to 2 documents

db.students.find().sort({ age: 1 });
// Sort results by age ascending (1 = asc, -1 = desc)

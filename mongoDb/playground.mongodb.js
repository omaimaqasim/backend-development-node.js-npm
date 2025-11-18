

// Select the database to use.
use('webDevelopment');

// Insert a few documents into the sales collection.
db.getCollection('concepts').insertMany([

  {
    name: "zeyden",
    class: "js concepts"
  },
    {
    name: "hunzaa",
    class: "js advance"
  },
  {
    name: "ali",
    class: "html basics"
  },
  {
    name: "sara",
    class: "css styling"
  },
  {
    name: "ahmed",
    class: "react intro"
  }


]);

// Print a message to the output window.
console.log(`done inserting data`);


const fs = require("fs");

console.log("=== ASYNC (Non-blocking) ===");

// async method
fs.writeFile("notes.txt", "my first note", () => {
    console.log("done making notes.txt");
});

fs.appendFile("notes.txt", "\n and this is updated", (e) => {
    if (e) console.error(e);
    else console.log("done appending to notes.txt");
});

fs.readFile("notes.txt", (e, d) => {
    if (e) console.error(e);
    else console.log("notes.txt content:", d.toString());
});

console.log("=== SYNC (Blocking) ===");

// synchronous method
fs.writeFileSync("notes2.txt", "my second note");
console.log("done making notes2.txt");

fs.appendFileSync("notes2.txt", "\n and i am beginner code learner");
console.log("done appending to notes2.txt");

const data = fs.readFileSync("notes2.txt");
console.log("notes2.txt content:", data.toString());


// the diff is that sync fn print first then sync function because
// nodejs tells os to hand async fn then goes to sync fn and solve that immediately not like asynch fn
// js must complete sync fn then goes to another function and in theend it ask the os any async fn after 
// complete sync fn then it print asyn fn


// qno 3 solved
// access is asyn fn good for real world

fs.access("test.txt",(err)=>{
    if (err) {
        fs.writeFile("test.txt","this is test file",(e)=>{
             if(e) throw e
            //  if err then create file and throw err it is wrong to directly throw err it will stop fn
            console.log("test file created")
         })
    }
    else{
        console.log("file already exists")
    }
})
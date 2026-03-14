console.log("practicing path module")
import path from "path";
let studentPath = "C:\\Users\\hp\\OneDrive\\Documents\\sigma web development course\\web development part 2\\topic_related_tasks\\task_01_file_node.js\\student.txt";

console.log(path.dirname(studentPath));
console.log(path.basename(studentPath));
console.log(path.extname(studentPath));

// rememver that .join automatically add correct slashes
console.log(path.join("C:","Downloads", "images", "photo.png"));

// An absolute path is the complete location of a file starting from the root of the system.



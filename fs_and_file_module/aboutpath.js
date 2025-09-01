// Import the built-in 'path' module (helps work with file and directory paths)
import path from "path";

// Absolute path to your file
let mypath = "C:\\Users\\hp\\OneDrive\\Documents\\sigma web development course\\web development part 2\\fs_and_file_module\\zeyn.txt";

// Get file extension (.txt)
console.log(path.extname(mypath)); 
// 👉 Output: .txt

// Get directory (folder) name from the path
console.log(path.dirname(mypath)); 
// 👉 Output: C:\Users\hp\OneDrive\Documents\sigma web development course\web development part 2\fs_and_file_module

// Get only the file name with extension
console.log(path.basename(mypath)); 
// 👉 Output: zeyn.txt

// Join paths in a safe way (automatically adds correct slashes)
console.log(path.join("C:/", "mywholework", "zeyn.txt")); 
// 👉 Output: C:\mywholework\zeyn.txt  (on Windows)

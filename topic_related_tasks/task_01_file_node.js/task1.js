import fs from "fs/promises";

async function main() {
  // Create students.txt
  await fs.writeFile("student.txt", "Ali\nAhmed\nSara\nZain\n");

  // Append more students
  await fs.appendFile("student.txt", "Ayesha\nHamza\n");

  // Append log.txt
  const now_time = new Date();
  await fs.appendFile("log.txt", "\nProgram executed at: " + now_time);

  console.log("Log updated successfully!");
}

main().catch(err => console.log(err));
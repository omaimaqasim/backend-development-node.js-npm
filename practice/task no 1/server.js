import fs from "fs"
import path from "path"

// -----------------------------
// base directory (where files are)
// -----------------------------
const dirPath = path.join(process.cwd(), "myfiles");
console.log(dirPath)

// -----------------------------
// read files in dir folder
// callback receives (error, dirContents)
// -----------------------------
fs.readdir(dirPath, (e, d) => {
  // d is the array of file names found in the folder
  console.log(d)

  // -----------------------------
  // loop through all files found
  // -----------------------------
  for (let i = 0; i < d.length; i++) {
    const file = d[i];

    // -----------------------------
    // get extension of current file (without the dot)
    // e.g. 'name.jpg' -> 'jpg'
    // -----------------------------
    let fileExtension = path.extname(file).slice(1)

    // target folder path for this extension
    const folderpath = path.join(dirPath, fileExtension)
    console.log(folderpath)

    // -----------------------------
    // create folder if it doesn't exist
    // { recursive: true } ensures parent folders are created if needed
    // -----------------------------
    if (!fs.existsSync(folderpath)) {
      fs.mkdirSync(folderpath, { recursive: true });
      console.log("📂 Folder created:", folderpath);
    } else {
      console.log("✅ Folder already exists:", folderpath);
    }

    // -----------------------------
    // prepare source and destination paths
    // -----------------------------
    const srcpath = path.join(dirPath, file)
    const destpath = path.join(folderpath, file)

    // -----------------------------
    // move the file (rename = move)
    // -----------------------------
    fs.rename(srcpath, destpath, (e) => {
      if (e) {
           console.error("❌ Error moving file:", file, err);
      }
      else{
           console.log(`✅ Moved: ${file} → ${fileExtension}/${file}`);
      }
    })

  } // end for loop
}) // end readdir

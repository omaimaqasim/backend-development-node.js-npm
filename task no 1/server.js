import fs from "fs"

import path from "path"

// dir of folder where all files are present
const dirPath = path.join(process.cwd(), "myfiles");
console.log(dirPath)


// read files in dir folder
fs.readdir(dirPath,(e,d)=>{
    console.log(d)
    
    // loop throught myfiles
    for (let i = 0; i < d.length; i++) {
        const file = d[i];
        // get extensions of all files in myfiles
        let fileExtension  =   path.extname(file).slice(1)
        // get path all of extension files
        const folderpath = path.join(dirPath,fileExtension)
        console.log(folderpath)
            
         // create folder if it doesn't exist
    if (!fs.existsSync(folderpath)) {
      fs.mkdirSync(folderpath, { recursive: true });
      console.log("📂 Folder created:", folderpath);
    } else {
      console.log("✅ Folder already exists:", folderpath);
    }
       
    }
})

// as it will thorw error if not folder exist thats why we use this With { recursive: true }, Node.js will automatically create parent folders if they don’t exist.

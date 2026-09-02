"use server"
import fs from "fs/promises"
 export const submitAction = async (e)=>{
    // this will tell that all the code in for server
    console.log(e.get("name") , e.get("add"));
  await fs.writeFile("ummi.txt" , `name is ${e.get("name")} and 
    address is ${e.get("add")} `);
    // e.get give us value of the key what you write name is the key and what user enter will be value
    

  }
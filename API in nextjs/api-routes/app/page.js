
"use client"
import Image from "next/image";
import { POST } from "./api/add/route";

export default function Home() {

  let data = {
    name : "zeyden",
    role : "CEO"
  }
  const handleClick = async () => {
    let a = await fetch("/api/add", {
      method: POST,
       headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let res = await a.json()
    console.log(res)
  }

  return (
    <div>
      <h1>NEST JS API REQUEST</h1>
      <button onClick={handleClick} > click me</button>
    </div>
  );
}

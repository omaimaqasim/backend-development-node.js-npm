"use client"
import Image from "next/image";
import { submitAction } from "@/actions/server";
import { useRef } from "react";
export default function Home() {
 
  let ref = useRef();

  return (
    <div className="min-w-full p-10  ">
 {/* here ref is refrence and {ref} is a variable you created using useref hook so you are saying save form refrence inside ref variable */}
{/* this action mean when form is submitted then run this function and e is data of form that is name and address field you created using name  */}
    <form ref={ref} action={(e)=>{submitAction(e) ; ref.current.reset()}} className="border mx-auto border-white w-fit">
      <div className="flex">
        {/* remember is e is obj that conatain all form data in key and value form name will be key and what user input will be its form */}
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>

      <div className="flex gap-3">
        <label htmlFor="add">Adress</label>
        <input type="text" name="add" id="add" />
      </div>

      <div>
      <button>submit</button>
      </div>
    </form>
    </div>
  );
}

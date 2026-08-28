import Image from "next/image";
import { submitAction } from "@/actions/server";
export default function Home() {


  return (
    <div className="min-w-full p-10  ">

    <form action={submitAction} className="border mx-auto border-white w-fit">
      <div className="flex">
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

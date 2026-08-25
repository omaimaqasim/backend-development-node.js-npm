import Image from "next/image";

export default function Home() {
  return (
  <div className="">
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>this is the home page</h1>
        {/* //example of external image */}
      <Image src="https://img.magnific.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80"
        width={500}
        height={500}
        alt="Picture of the author" >

      </Image>  


    </div>
      <div className="relative w-100 h-100 flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black ">
        {/* //example of local image */}
        <Image src="/focus.png" //   / in image src / directly think public as a root 
        className="object-cover"//sometimes you w and h of container is small comparing to image so for preventing image stretch and compress we use this 
        fill = {true}//this property automatically add position absolute
        alt="Picture of the author" >

      </Image>
      </div>
  </div>
  );
}

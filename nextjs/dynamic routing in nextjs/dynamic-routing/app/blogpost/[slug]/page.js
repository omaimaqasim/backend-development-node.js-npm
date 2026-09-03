export default async function Page({ params }) {
  //fetch your blog by its slug
  // throw new Error("error please check") //for check error.js
  
  const { slug } = await params
let  languages = [
  "javascript",
  "python",
  "java",
  "cpp",
  "rust"
];

if(languages.includes(slug)){
  return <div>My Post: {slug}</div>

}
else{
   return <div>page not found</div>
}



}
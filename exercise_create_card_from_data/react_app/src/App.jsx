import { useState ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Components/Card'

function App() {
 const [posts,setPosts] = useState([]);


  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts')
         .then(response => response.json())
         .then(json =>    setPosts(json))

     setPosts(json);
   
  }, []);
  

  return (
    <>
     {posts.map(post=>{
       return <Card key={post.id} userID = {post.userId} title = {post.title} des ={post.body} />
     })}
    </>
  )
}

export default App

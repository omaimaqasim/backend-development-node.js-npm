const express = require('express')
//always put specific routes first then dynamic routes
//this line create a space routers that handle only posts request in a whole app that is like mall
const router = express.Router()


// Dummy data
let posts = [
  { id: 1, title: "First Post", content: "Hello world" },
  { id: 2, title: "Second Post", content: "Learning Express" }
];

router.get("/",(req,res)=>{
    res.json(posts);
})
//add new post in posts

router.get('/addpost',(req,res)=>{
    posts.push({id: 3, title: "third Post", content: "Learning nodejs"});
      res.json(posts);
})


router.get('/updatepost1',(req,res)=>{
    posts[0].content = "hello zeyden how are you"
      res.json(posts);
      console.log("post updated")
})

router.put('/passwordUpdated',(req,res)=>{
   
    console.log("put request passowrd updated");
      res.send("password updated");
})




router.get("/:id",(req,res)=>{
   
    let post = posts.find(p=> p.id === Number(req.params.id))
    if (post) {
        res.json(post);  
    }
    else{
        res.status(404).json({ message: "Post not found" });
    }
})



  

module.exports = router;

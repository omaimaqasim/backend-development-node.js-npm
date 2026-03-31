const express = require('express')
//this line create a space routers that handle only posts request in a whole app that is like mall
const router = express.Router()


// Dummy data
let posts = [
  { id: 1, title: "First Post", content: "Hello world" },
  { id: 2, title: "Second Post", content: "Learning Express" }
];

router.get("/posts",(req,res)=>{
    res.json(posts);
})
router.get("/posts/:id",(req,res)=>{
    let post = posts.find(p=> p.id === req.params.id)
    if (post) {
        res.json(post);  
    }
    else{
        res.status(404).json({ message: "Post not found" });
    }
})

module.exports = router;

// ==================================================
// ✅ Import express package from server
// ==================================================
const express = require('express')
const app = express()
const port = 3000


// ==================================================
// ✅ Root route → When we visit '/', it shows "Hello World!"
// ==================================================
app.get('/', (req, res) => {
  res.send('Hello World!')
})


// ==================================================
// ✅ Blog route with dynamic params
// ==================================================
// As you know, if you make a blog, then that website will have 
// more than one web page. For that complexity, we would normally 
// write more and more code. ExpressJS makes this easy by allowing 
// "params" in routes. Whatever we write in the URL is captured 
// automatically and made available in req.params.

// Example: /blog/apple/10 → { slug: "apple", seconds: "10" }
app.get('/blog/:slug/:seconds', (req, res) => {
  console.log(req.params)   // only log the params, not whole req object
  
  // logic to fetch slug from db
  res.send(`hello ${req.params.slug} and of ${req.params.seconds}`)

  // console.log(req.query) // you can use this for ?key=value query params
})


// ==================================================
// ✅ Start server
// ==================================================
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// ===================================================
// 📝 Router in Express
// ===================================================
// Router in express is like a mini express app that is used
// to organize our routes. Instead of writing code in one file,
// make a "routes" folder and separate different routes for better organization.

// ===================================================
// 📌 Basic Setup
// ===================================================
// 1. First thing to do after making file -> npm init -y 
// 2. Then install expressjs -> npm install express 
// 3. Run server with nodemon -> nodemon main.js

const express = require('express')
const app = express()
const port = 3000

// Import Routers from routes folder
const blog = require('./routes/blog')
const shopinfo = require('./routes/shop')

// ===================================================
// 📌 Middleware
// ===================================================
// Middleware is like a helper that runs before your routes.
// Example: logging, authentication, serving static files, etc.

// This line serves static files from "public" folder (CSS, JS, Images)
app.use(express.static("public"))

// Mounting routers (all blog routes will start with "/blog")
app.use('/blog', blog)
app.use('/shop', shopinfo)

// ===================================================
// 📌 Request Types (GET, POST, PUT)
// ===================================================
// - GET: When we want some data from server (like reading).
// - POST: When we want to send data securely (like login forms).
// - PUT: When we want to update existing data on server.
//
// 💡 TIP: Use Postman to test these requests without writing frontend code.

app
  .get('/', (req, res) => {
    // GET request - fetching data
    res.send('Hello World22!')
  })
  .post('/', (req, res) => {
    // POST request - sending secure data like password
    console.log("yes post request tested")
    res.send('post request tested!')
  })
  .put('/', (req, res) => {
    // PUT request - updating data
    console.log("yes put request tested")
    res.send('Hello World put!')
  })

// ===================================================
// 📌 Sending Files
// ===================================================
// - res.send(): used for sending simple text response.
// - res.sendFile(): used for sending a full HTML file.
//
// { root: __dirname } → makes path absolute (so it works on any system)

app.get('/index', (req, res) => {
  res.sendFile('templates/index.html', { root: __dirname })
})

// ===================================================
// 📌 Sending JSON
// ===================================================
// - res.json(): used to send JSON data (API responses).
// - Very useful when making backend APIs for frontend apps.
//
// 💡 TIP: To beautify JSON in Chrome, download "JSON Formatter" extension.

app.get('/api', (req, res) => {
  res.json({ a: 1, b: 2, c: 3, d: 4, name: ["ummi"] })
})

// ===================================================
// 📌 Start Server
// ===================================================
// app.listen() starts the server and listens for requests.
// Port 3000 is common, but you can change it if needed.

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

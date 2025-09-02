// ========================================
// Middleware in Express.js – Notes & Examples
// ========================================

// ✅ Middleware is a function that sits between request and response.
// - It can modify the request or response.
// - It can stop the request before sending a response.
// - Or it can pass the request forward using next().
// ✅ We use middleware to avoid repeating code because sometimes
//   you have to do the same thing again and again in different places.
//   Middleware centralizes and handles this efficiently.

const express = require('express')
const app = express()
const port = 3000

// ========================================
// Built-in Middleware
// ========================================
// Example: express.static() is used to serve static files from "public" folder.
// app.use(express.static("public"))

// ========================================
// Custom Middleware (Syntax)
// ========================================
// A middleware is simply a function with three parameters:
// (req, res, next)
// - req = request
// - res = response
// - next = function to pass control to the next middleware/route

// Example 1: Custom Logger Middleware
const myLogger = function (req, res, next) {
  console.log(`${Date.now()} is a ${req.method}`)
  req.zeyden = "i am pro programmer myself zeyden"  // modifying the request object
  next() // pass control to the next middleware
}
app.use(myLogger)

// Example 2: Another Middleware (inline function)
app.use((req, res, next) => {
  console.log('LOGGED middleware 2')
  next()
})

/*
🔹 Notes:
- If we don't use next(), that middleware will not pass control to the next one or the route.
- If we use res.send() inside a middleware, then even if we write next(),
  it will NOT pass control further because the response has already been sent.
*/

// ========================================
// Route Example
// ========================================
app.get('/', (req, res) => {
  res.send('hey fellows ' + req.zeyden)
})

// ========================================
// Server
// ========================================
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// ========================================
// Types of Middleware
// ========================================
// 1. Application-level middleware → example is above (app.use(...))
// 2. Router-level middleware → can be handled in a separate router file
// 3. Error-handling middleware → catches and handles errors
// 4. Built-in middleware → like express.static, express.json, etc.
// 5. Third-party middleware → someone else wrote it, you just import & use (e.g., morgan, cors)

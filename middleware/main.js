const express = require('express')
const app = express()
const port = 3000

// this is build in middleware
// app.use(express.static("public"))

// syntax of middleware is that make a function and put that in app.us for example

// we can use middleware like this 
const myLogger = function (req, res, next) {
  console.log('LOGGED middleware 1')
  next()
}
app.use(myLogger)
// or like this also
app.use((req, res, next)=> {
  console.log('LOGGED middleware 2')
  next()
})
// first para is request sec response mean if someone send req then middleware stop 
// the req and it give req what was in the log then next function give req control
// to next middleware or to get if we dont use next function then that middleware 
// will not give control to another one 

// and if you use res.send then event if you use next it will never give control to another one bc
// after req response is already given



app.get('/', (req, res) => {
  res.send('Hello World 222!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

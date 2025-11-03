const express = require('express')
const app = express()


// middleware exp
function logger(req,res,next){
  console.log("request method :",req.method)
  next()
}

app.use(logger)

app.get('/', (req, res) => {
  res.send('Hey fellows! Request method is: ' + req.method)

})

app.listen(5000, () => console.log('Server chal gaya'))

// we use routes for making our code orginaized and prevent it
// from getting messy . we use middleware if we want to reused a code
// everytime whenever each route run
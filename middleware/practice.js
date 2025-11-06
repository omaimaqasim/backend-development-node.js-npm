const express = require('express')
const app = express()


// middleware exp
function logger(req,res,next){
  console.log("request method :",req.method)
  next()
}

app.use(logger)

// routes
app.get('/' , (req,res)=>{
  res.send('home page');
})

app.get('/about', (req, res) => {
  res.send('About Page');
});


// making random quotes app
const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Success is not in what you have, but who you are.",
  "Believe you can and you're halfway there.",
  "Do what you can, with what you have, where you are.",
  "Don’t watch the clock; do what it does. Keep going.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream bigger. Do bigger.",
  "Your limitation—it's only your imagination."
];
//  this is the formula to get random values Random number=Math.floor(Math.random() * (max - min + 1)) + min
app.get("/quotes", (req,res)=>{
    let randomQuote = quotes[Math.floor(Math.random()*quotes.length)]
    res.send(randomQuote)
})



app.listen(5000, () => console.log('Server chal gaya'))

// we use routes for making our code orginaized and prevent it
// from getting messy . we use middleware if we want to reused a code
// everytime whenever each route run
const express = require('express')
const app = express()
const port = 3500

// middleware 

function checker(req,res,next) {
  let now = new Date();
   console.log('Request received at :' + now.toLocaleTimeString());
     next()
}

app.use(checker)

app.get("/" , (req,res)=>{
    res.send("Welcome to the Random Quotes API")
})

// making random quote
const urduQuotes = [
  "زندگی میں ہمیشہ مسکرانا سیکھو، کیونکہ غم تو خود ہی آ جاتے ہیں۔",
  "جو وقت کی قدر کرتا ہے، وقت اُس کی قدر کرتا ہے۔",
  "اچھے لوگ ہمیشہ دل میں جگہ بناتے ہیں، باتوں میں نہیں۔",
  "اللہ پر بھروسہ رکھو، وہ راستے بھی بناتا ہے جہاں کوئی راستہ نہیں ہوتا۔",
  "خاموشی اکثر وہ جواب ہوتی ہے جو الفاظ نہیں دے پاتے۔",
  "محنت کرنے والا کبھی خالی ہاتھ نہیں لوٹتا۔",
  "کامیابی اُنہیں ملتی ہے جو ہار ماننے سے انکار کرتے ہیں۔",
  "دل صاف ہو تو دعا ضرور قبول ہوتی ہے۔",
  "ہر مشکل کے بعد آسانی ہے، بس صبر کا دامن نہ چھوڑو۔",
  "دوسروں کے لیے وہی چاہو جو اپنے لیے چاہتے ہو۔"
];

// add query route
app.get("/quote",(req,res)=>{
  let author = req.query.author
  if (author==="ali") {
    let randomQuote = urduQuotes[Math.floor(Math.random()*urduQuotes.length) ]
    res.send(randomQuote) 
  }
  else{
    res.send(`quotes by ${author} are not found `)
  }
})

// return quote by id if not found then return not found quote
app.get("/quote/:id",(req,res)=>{
  let id = req.params.id
   if (id==='zen22') {
       res.send(urduQuotes[1]+'author---zen22')
   }
   else{
    res.send("quote not found")
   }
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
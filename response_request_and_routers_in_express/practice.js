const express = require('express')
const app = express()
const port = 4000


// Import Routers from routes folder
const Contact = require('./routes/contact')
app.use('/contact', Contact);

// app.use() is used to set up middleware or connect routes to your main app.


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
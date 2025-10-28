const express = require('express')
const app = express()
const port = 4000


// Import Routers from routes folder
const Contact = require('./routes/contact')
app.use('/contact', Contact);

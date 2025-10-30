const express = require("express")
const router = express.Router()


router.get('/', (req, res) => {
  res.send('this page contain all contact information')
})

router.get('/help', (req, res) => {
  res.send('How can we help you?')
})

router.get('/message/:name', (req, res) => {
  res.send(`Message received from ${req.params.name} `)
})

module.exports = router;


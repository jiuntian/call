var express = require('express')
var app = express()
app.get('/', function (req, res) {
  res.send({answer: "Homepage"})
})

app.get('/call', function (req, res) {
  res.send({answer: "Calling"})
})
app.listen(8080)
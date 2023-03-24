//Load express module with `require` directive
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('****************APPLICAION CREATED SUCCESSFULLY***************')
})

//Launch listening server on port 8080
app.listen(3040, function () {
  console.log('app listening on port 3040')
})
var express = require('express');
var app = express();

app.get('/api/:name', function (req, res) {
  res.send("Goodbye " + req.params.name);
});

app.listen(3000, function () {
  console.log("Server running on port 3000");
});
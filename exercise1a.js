var express = require('express');
var app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing
app.get('/api/hello', function (req, res) {
  res.send("HelloWorld!");
});

app.post('/number', function (req, res) {
  res.send("The number is " + req.body.num);
});

app.listen(3000, function () {
  console.log("Server running on port 3000");
});
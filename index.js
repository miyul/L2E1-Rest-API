var express = require('express');
var app = express();

// Middleware (declare once)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 1a) Route /api/hello
app.get('/api/hello', function (req, res) {
  res.send("Hello World!");
});

// 1b) Route /api/:name
app.get('/api/:name', function (req, res) {
  res.send("Goodbye " + req.params.name);
});

// 1c) Route /api/sum
app.post('/api/sum', function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var sum = num1 + num2;
  res.send("The sum is " + sum);
});

// Start server
app.listen(3000, function () {
  console.log("Server running on port 3000");
});
var express = require('express');
var app = express();

// Middleware to read body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/sum', function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var sum = num1 + num2;

  res.send("The sum is " + sum);
});

app.listen(3000, function () {
  console.log("Server running on port 3000");
});
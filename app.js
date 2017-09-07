const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(3000, function () {
  console.log('Приклад застосунку, який прослуховує 3000-ий порт!');
});
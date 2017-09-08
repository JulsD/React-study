const express = require('express');
const path = require('path');

const app = express();

app.use( express.static( __dirname + '/../dist/' ));

app.get('/', function (req, res) {
  res.sendFile(path.join( __dirname, '/../dist/', 'index.html' ));
});

app.listen(3000, function () {
  console.log('Приклад застосунку, який прослуховує 3000-ий порт!');
});
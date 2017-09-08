const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.listen(3000, function () {
  console.log('Приклад застосунку, який прослуховує 3000-ий порт!');
});
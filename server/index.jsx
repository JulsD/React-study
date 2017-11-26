import express from 'express';
import handleRender from './handleRender';

const path = require('path');
const port = 8000;
const app = express();

app.use(express.static(path.resolve(__dirname, '/dist')));

app.get('/', handleRender);
app.get('/search', handleRender);
app.get('/movie', handleRender);

app.listen( port,  () => {
  console.log(`Exprass listning on port ${port}`);
  console.log(`http://localhost:${port}`);
});

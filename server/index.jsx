import express from 'express';
import handleRender from './handleRender';

const port = 8000;
const app = express();

app.use('/assets' ,express.static(process.argv[2]));

app.get('/', handleRender);
app.get('/search', handleRender);
app.get('/movie/*', handleRender);

app.listen( port,  () => {
  console.log(`Exprass listening on port ${port}`);
  console.log(`http://localhost:${port}`);
});

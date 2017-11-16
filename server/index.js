import express from 'express';
import handleRender from './handleRender';

const path = require('path');
const port = 8000;
const server = express();

server.use(express.static(path.join(__dirname, '../dist')));
server.get('/*', handleRender);

server.listen(port,  () => {
  console.log(`Exprass listning on port ${port}`);
});
import React from 'react'
import { renderToString } from 'react-dom/server';

import App from '../src/app'

function renderFullPage(html){
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>React App</title>
        <meta charset="utf-8">
      </head>
      <body>
        <div id="app">${html}</div>
        <script type="text/javascript" src="bundle.js"></script>
      </body>
    </html>
  `;
}

function handleRender(req, res){
  const html = renderToString(<App />)
  res.send(renderFullPage(html));
}

export default handleRender;
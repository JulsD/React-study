import React from 'react'
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'isomorphic-fetch';
import fs from 'fs';

import App from '../src/app/components/Wrapper';
import configureStor from '../src/app/configureStore';

const path = require('path');
const index  = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');

function renderFullPage(html, preloadedState){
  const preloadedStateHtml = `
    <script>
      window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
    </script>
  `;
  const middleHtml = index.replace('<!--:: APP ::-->', html);
  const finalHtml = middleHtml.replace('<!--:: PRELOADED_STATE ::-->', preloadedStateHtml);
  return finalHtml;
}

function handleRender(req, res){
  const context = {};
  const store = configureStor();
  const app = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );
  const html = renderToString(app);
  
  if (context.url) {
    return res.redirect(context.url)
  }

  const preloadedState = store.getState();
  
  res.send(renderFullPage(html, preloadedState));
}

export default handleRender;
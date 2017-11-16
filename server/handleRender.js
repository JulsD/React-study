import React from 'react'
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from '../src/app/components/Wrapper';
import configureStor from '../src/app/configureStore';

function renderFullPage(html, preloadedState){
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>React App</title>
        <meta charset="utf-8">
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script type="text/javascript" src="bundle.js"></script>
      </body>
    </html>
  `;
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
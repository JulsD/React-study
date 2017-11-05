import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './app/reducers';
import thunk from 'redux-thunk';

import './styles/common.css';
import App from './app/index.jsx';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

render((
  <Provider store={store}>
    <AppContainer>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </AppContainer>
  </Provider>
), document.getElementById('app'));

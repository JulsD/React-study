import React from 'react'
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './app/configureStore';

import './styles/common.css';
import App from './app/index.jsx';

const store = configureStore(window.PRELOADED_STATE);
delete window.PRELOADED_STATE;

hydrate((
  <Provider store={store}>
    <AppContainer>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </AppContainer>
  </Provider>
), document.getElementById('app'));

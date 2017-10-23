import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom';

import './styles/common.css';
import App from './app/index.jsx';
import configureStore from './app/store/configureStore'

const store = configureStore()

render((
  <Provider store={store}>
    <AppContainer>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </AppContainer>
  </Provider>
), document.getElementById('app'));

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { SearchPage, MoviePage } from './pages';

class App extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={SearchPage}/>
          <Route path='/movie' component={MoviePage}/>
        </Switch>
      </div>
    );
  }
}

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'));

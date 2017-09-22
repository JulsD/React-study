import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { SearchPage, MoviePage } from './pages';

import '../styles/common.css';

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

export default App;



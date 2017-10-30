import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { SearchPage, MoviePage } from './pages';

class App extends React.Component {

  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={SearchPage}/>
          <Route path='/movie/:id' component={MoviePage}/>
          <Route path='/search' component={SearchPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'

import { SearchPage, MoviePage } from './pages';

class App extends React.Component {

  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={SearchPage}/>
          <Route path='/movie/:title' component={MoviePage}/>
          <Route path='/search' component={SearchPage}/>
        </Switch>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);

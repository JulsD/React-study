import React from 'react';
import {render} from 'react-dom';

import HomePage from './HomePage';

class App extends React.Component {
  render () {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
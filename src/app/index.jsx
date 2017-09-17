import React from 'react';
import {render} from 'react-dom';

import SearchPage from './SearchPage';

class App extends React.Component {
  render () {
    return (
      <div>
        <SearchPage />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

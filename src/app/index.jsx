import React from 'react';
import {render} from 'react-dom';

import { SearchPage, MoviePage } from './pages';

class App extends React.Component {
  render () {
    return (
      <div>
        <SearchPage />
        <MoviePage />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

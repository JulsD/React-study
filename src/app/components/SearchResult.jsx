import React from 'react';
import MoviesList from './MoviesList';
import EmptySearch from './EmptySearch';

import common from './../../styles/common.css';

class SearchResult extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    const movies = this.props.movies;

    let searchResultBody = null;
    if (movies) {
      searchResultBody = <MoviesList movies={movies}/>;
    } else {
      searchResultBody = <EmptySearch />;
    }
    return (
      <div>
        <div className = {common.wrapper}>
          {searchResultBody}
        </div>
      </div>
    );
  }

}

export default SearchResult;

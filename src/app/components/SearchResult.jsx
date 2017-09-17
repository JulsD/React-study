import React from 'react';
import MoviesList from './MoviesList';

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
      searchResultBody = 'No films found';
    }
    return (
      <div className="search-resuls">
        {searchResultBody}
      </div>
    );
  }

}

export default SearchResult;

import React from 'react';

import Wrapper from './../Wrapper';
import MoviesList from './../MoviesList';
import EmptySearch from './../EmptySearch';

class SearchResult extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    const movies = [1,2,3,4,5];
    
    let searchResultBody = null;
    if (movies) {
      searchResultBody = <MoviesList movies={movies}/>;
    } else {
     searchResultBody = <EmptySearch />;
    }
    
    return (
      <div>
        <Wrapper>
          {searchResultBody}
        </Wrapper>
      </div>
    );
  }

}

export default SearchResult;

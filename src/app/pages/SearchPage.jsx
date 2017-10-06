import React from 'react';

import { 
  Header, 
  Footer, 
  SearchResult, 
  HeaderNav, 
  SearchBox, 
  HeaderFooter, 
  SearchNav,
  MoviesList, 
  EmptySearch
} from './../components';

import DB from '../../../mock-db/db.json';

class SearchPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let movies = DB || null;
    let searchResultBody = null;
    if (movies) {
      searchResultBody = <MoviesList movies={movies}/>;
    } else {
     searchResultBody = <EmptySearch />;
    }
    return (
      <div>
        <Header>
          <HeaderNav />
          <SearchBox />
        </Header>
        <HeaderFooter>
          <SearchNav sum={movies.length}/>
        </HeaderFooter>
        <SearchResult>
          {searchResultBody}
        </SearchResult>
        <Footer />
      </div>
    );
  }

}

export default SearchPage;

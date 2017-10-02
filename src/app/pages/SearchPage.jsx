import React from 'react';

import { 
  Header, 
  Footer, 
  SearchResult, 
  HeaderNav, 
  SearchBox, 
  HeaderFooter, 
  SearchNav
} from './../components';

// import DB from 'db.json';

class SearchPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const movies = [];
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
          <SearchNav />
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

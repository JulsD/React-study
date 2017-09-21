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
import common from './../../styles/common.css';

class SearchPage extends React.Component {

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
      <div className = {common.typo}>
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

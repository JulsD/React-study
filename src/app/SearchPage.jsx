import React from 'react';

import { Logo, Header, Footer, SearchResult, HeaderNav, SearchBox, MovieBox, HeaderFooter, SearchNav, MovieInfo, NavMenu, MoviesList, EmptySearch } from './components';
import common from './../styles/common.css';

class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {movieOpend: false};
  }

  render() {
    const movieOpend = this.state.movieOpend;
    const movies = [1,2,3,4,5];
    let emptyResults = movies ? false : true;
    
    let headerBody = null;
    if (movieOpend) {
      headerBody = <MovieBox />
    } else {
      headerBody = <SearchBox />
    }
    let headerFooterBody = null;
    if (movieOpend) {
      headerFooterBody = <MovieInfo />;
    } else if (!emptyResults) {
      headerFooterBody = <SearchNav />;
    }
    let navBody = null;
    if (movieOpend) {
      navBody = <NavMenu menu={['Search']}/>;
    }
    let searchResultBody = null;
    if (movies) {
      searchResultBody = <MoviesList movies={movies}/>;
    } else {
      searchResultBody = <EmptySearch />;
    }
    return (
      <div className = {common.typo}>
        <Header>
          <HeaderNav>
            {navBody}
          </HeaderNav>
          {headerBody}
        </Header>
        <HeaderFooter>
          {headerFooterBody}
        </HeaderFooter>
        <SearchResult>
          {searchResultBody}
        </SearchResult>
        <Footer>
          <Logo />
        </Footer>
      </div>
    );
  }

}

export default SearchPage;

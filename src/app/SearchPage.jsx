import React from 'react';

import { Logo, Header, Footer, SearchResult, HeaderNav, SearchBox, MovieBox, HeaderFooter, SearchNav, MovieInfo } from './components';
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
    let headerBody;
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
    return (
      <div className = {common.typo}>
        <Header movieOpend={movieOpend} emptyResults = {emptyResults}>
          <HeaderNav movieOpend={movieOpend}/>
          {headerBody}
        </Header>
        <HeaderFooter>
          {headerFooterBody}
        </HeaderFooter>
        <SearchResult movies = {movies}/>
        <Footer>
          <Logo />
        </Footer>
      </div>
    );
  }

}

export default SearchPage;

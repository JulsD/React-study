import React from 'react';

import { Logo, Header, Footer, SearchResult, HeaderNav, SearchBox, MovieBox, HeaderFooter } from './components';
import common from './../styles/common.css';

class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {movieOpend: false};
  }

  render() {
    const movieOpend = this.state.movieOpend;
    const movies = [1,2,3,4,5];
    let headerBody;
    if (movieOpend) {
      headerBody = <MovieBox />
    } else {
      headerBody = <SearchBox />
    }
    return (
      <div className = {common.typo}>
        <Header movieOpend={movieOpend} emptyResults = {movies ? false : true}>
          {headerBody}
        </Header>
        <HeaderFooter movieOpend={movieOpend} emptyResults = {movies ? false : true}/>
        <SearchResult movies = {movies}/>
        <Footer>
          <Logo />
        </Footer>
      </div>
    );
  }

}

export default SearchPage;

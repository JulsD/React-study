import React from 'react';

import { 
  Header, 
  Footer, 
  SearchResult, 
  HeaderNav, 
  MovieBox, 
  HeaderFooter, 
  MovieInfo, 
  NavMenu,
  MoviesList
} from './../components';
import common from './../../styles/common.css';

// import DB from '../mockdb.js';

class MoviePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const movies = [1,2,3,4,5];
    
    let searchResultBody = null;
    if (movies) {
      searchResultBody = <MoviesList movies={movies}/>;
    } 

    return (
      <div className = {common.typo}>
        <Header>
          <HeaderNav>
            <NavMenu menu={['Search']}/>
          </HeaderNav>
          <MovieBox />
        </Header>
        <HeaderFooter>
          <MovieInfo />
        </HeaderFooter>
        <SearchResult>
          {searchResultBody}
        </SearchResult>
        <Footer />
      </div>
    );
  }

}

export default MoviePage;

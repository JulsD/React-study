import React from 'react';

import { 
  Logo, 
  Header, 
  Footer, 
  SearchResult, 
  HeaderNav, 
  MovieBox, 
  HeaderFooter, 
  MovieInfo, 
  NavMenu,
  MoviesList, 
} from './../components';
import common from './../../styles/common.css';

class MoviePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const movies = [1,2,3,4,5];

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
          <MoviesList movies={movies}/>
        </SearchResult>
        <Footer>
          <Logo />
        </Footer>
      </div>
    );
  }

}

export default MoviePage;

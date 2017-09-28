import React from 'react';

import { 
  Header, 
  Footer, 
  SearchResult, 
  HeaderNav, 
  MovieBox, 
  HeaderFooter, 
  MovieInfo, 
  NavMenu
} from './../components';
import common from './../../styles/common.css';

class MoviePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
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
        <SearchResult />
        <Footer />
      </div>
    );
  }

}

export default MoviePage;

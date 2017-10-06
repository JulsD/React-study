import React from 'react';
import find from 'lodash/find';
import filter from 'lodash/filter';

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

import DB from '../../../mock-db/db.json';

class MoviePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let movieTitle = this.props.match.params.title;
    let movies = DB;
    let movie = find(movies, {'show_title':movieTitle});
    let movieDirector = movie.director;
    let moviesByDir = filter(movies, {'director':movieDirector})
    let searchResultBody = null;
    if (movies) {
      searchResultBody = <MoviesList movies={moviesByDir}/>;
    }

    return (
      <div>
        <Header>
          <HeaderNav>
            <NavMenu menu={['Search']}/>
          </HeaderNav>
          <MovieBox movie={movie}/>
        </Header>
        <HeaderFooter>
          <MovieInfo movieInfo={movieDirector}/>
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

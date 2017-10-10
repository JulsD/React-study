import React from 'react';
import * as api from '../data/api';

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

class MoviePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const movieTitle = this.props.match.params.title;
    const movie = api.getMovieByTitle(movieTitle);
    const movieDirector = movie.director;
    let searchResultBody = null;
    if (movie) {
      const moviesByDir = api.findMoviesBy({'director':movieDirector});
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

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
    this.state = {}
  }

  searchMovieByTitle(movieTitle){
    let movie;
    api.getMovieByTitle(movieTitle).then(
      (result) => {
        movie = result;
        return api.findMoviesBy({'director':movie.director})
      }
    ).then(
      (moviesByDir) => {
        this.setState({
          movie,
          moviesByDir
        });
      }
    );
  }

  componentDidMount (){
    this.searchMovieByTitle(this.props.match.params.title);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.title !== this.props.match.params.title) {
      this.searchMovieByTitle(nextProps.match.params.title);
    }
  }

  render() {
    let searchResult = 'Loading';
    if (this.state.movie) {
      searchResult = <MoviesList movies={this.state.moviesByDir}/>;
    }

    return (
      <div>
        <Header>
          <HeaderNav>
            <NavMenu menu={['Search']}/>
          </HeaderNav>
          { this.state.movie ?  <MovieBox movie={this.state.movie}/>  : searchResult }
        </Header>
        <HeaderFooter>
          { this.state.movie ?  <MovieInfo movieInfo={this.state.movie.director}/>  : searchResult }
        </HeaderFooter>
        <SearchResult>
          {searchResult}
        </SearchResult>
        <Footer />
      </div>
    );
  }

}

export default MoviePage;

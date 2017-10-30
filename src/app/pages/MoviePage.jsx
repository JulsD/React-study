import React from 'react';
import * as api from '../resource/api';
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

class MoviePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  searchMovieById(movieId){
    let movie, self = this;
    api.getMovieById(movieId)
     .then(function(result) {
       movie = result;
       return api.findMovieDirectorAndActors(movieId)
     })
     .then(function(result) {
         movie.actors = result.cast;
         movie.director = filter(result.crew, { 'job': 'Director' });
         return api.findMoviesByDirectorName(movie.director[0].name);
       })
       .then(function(data) {
           self.setState({
             movie,
             moviesByDir: filter(data.crew, { 'job': 'Director' })
           })
         })
     .catch(function(error) {
       console.log('Request failed', error);  
     });
  }

  componentDidMount (){
    this.searchMovieById(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.id !== this.props.match.params.id) {
      this.searchMovieById(nextProps.match.params.id);
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

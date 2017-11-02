import React from 'react';
import * as api from '../resource/api';
import filter from 'lodash/filter';
import { connect } from 'react-redux';
import { setMovie } from '../action/movie';

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
         self.props.setMovie({
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
    if (this.props.movieInfo.movie) {
      searchResult = <MoviesList movies={this.props.movieInfo.moviesByDir}/>;
    }

    return (
      <div>
        <Header>
          <HeaderNav>
            <NavMenu menu={['Search']}/>
          </HeaderNav>
          { this.props.movieInfo.movie ?  <MovieBox/>  : searchResult }
        </Header>
        <HeaderFooter>
          { this.props.movieInfo.movie ?  <MovieInfo/>  : searchResult }
        </HeaderFooter>
        <SearchResult>
          {searchResult}
        </SearchResult>
        <Footer />
      </div>
    );
  }

}

const actions = {
  setMovie
}

function mapProps(state) {
  return {
    movieInfo: state.movie
  }
}

export default connect(mapProps, actions)(MoviePage);
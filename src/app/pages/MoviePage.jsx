import React from 'react';
import { connect } from 'react-redux';
import { findMovie } from '../action';

import {
  Header,
  Footer,
  SearchResult,
  HeaderNav,
  MovieBox,
  HeaderFooter,
  MovieInfo,
  NavMenu,
  MoviesList,
  Loader
} from './../components';

export class MoviePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  searchMovieById(movieId){
    this.props.findMovie(movieId);
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
    return (
      <div>
        <Header>
          <HeaderNav>
            <NavMenu menu={['Search']}/>
          </HeaderNav>
          { this.props.movieInfo.movie ?  <MovieBox/>  : (this.props.isLoading ? <Loader /> : '')}
        </Header>
        <HeaderFooter>
          { this.props.movieInfo.movie ?  <MovieInfo/>  : (this.props.isLoading ? <Loader /> : '') }
        </HeaderFooter>
        <SearchResult>
          {this.props.movieInfo.movie ? <MoviesList movies={this.props.movieInfo.moviesByDir}/> : (this.props.isLoading ? <Loader /> : '')}
        </SearchResult>
        <Footer />
      </div>
    );
  }

}

function actions(dispatch){
  return {
    findMovie: (...params) => dispatch(findMovie(params))
  }
}

function mapProps(state) {
  return {
    movieInfo: state.movie,
    isLoading: state.isLoading.movie
  }
}

export default connect(mapProps, actions)(MoviePage);
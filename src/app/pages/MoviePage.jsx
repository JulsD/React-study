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
  MoviesList
} from './../components';

class MoviePage extends React.Component {

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

function actions(dispatch){
  return {
    findMovie: (...params) => dispatch(findMovie(params))
  }
}

function mapProps(state) {
  return {
    movieInfo: state.movie
  }
}

export default connect(mapProps, actions)(MoviePage);
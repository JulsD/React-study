import React from 'react';
import sortBy from 'lodash/sortBy';
import reverse from 'lodash/reverse';
import * as queryString from 'query-string';
import { connect } from 'react-redux';
import { searchByTitle } from '../action/searchByTitle';
import { searchByDirector } from '../action/searchByDirector';

import {
  Header,
  Footer,
  SearchResult,
  HeaderNav,
  SearchBox,
  HeaderFooter,
  SearchNav,
  SearchSort,
  SearchSum,
  MoviesList,
  EmptySearch
} from './../components';

class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  searchMoviesByParam(query){
    const searchQuery = queryString.parse(query);
      if(searchQuery['title']) {
        this.props.searchByTitle(searchQuery['title']);
     } else if (searchQuery['director']) {
       this.props.searchByDirector(searchQuery['director']);
     } else {
       return;
     }
  }

  componentDidMount (){
    this.searchMoviesByParam(this.props.location.search);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.location.search !== this.props.location.search) {
      this.searchMoviesByParam(nextProps.location.search);
    }
  }

  render() {

    let searchResultBody = null;
    let moviesSorted;
    if(this.props.search.movies){
      if(this.props.search.movies.length > 0) {
        moviesSorted = sortBy(this.props.search.movies, [this.props.sortBy]);
        searchResultBody = <MoviesList movies={reverse(moviesSorted)}/>;
      } else {
        searchResultBody = <EmptySearch />;
      }
    }

    return (
      <div>
        <Header>
          <HeaderNav />
          <SearchBox />
        </Header>
        <HeaderFooter>
          <SearchNav>
            {this.props.search.movies ? <SearchSum/> : ''}
            {this.props.search.movies ? <SearchSort /> : ''}
          </SearchNav>
        </HeaderFooter>
        <SearchResult>
          {searchResultBody}
        </SearchResult>
        <Footer />
      </div>
    );
  }

}


function actions(dispatch){
  return {
    searchByTitle: (...params) => dispatch(searchByTitle(params)),
    searchByDirector: (...params) => dispatch(searchByDirector(params))
  }
}

function mapProps(state) {
  return {
    sortBy: state.sort,
    search: state.search
  }
}

export default connect(mapProps, actions)(SearchPage);

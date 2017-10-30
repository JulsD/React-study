import React from 'react';
import sortBy from 'lodash/sortBy';
import reverse from 'lodash/reverse';
import * as api from '../resource/api';
import * as queryString from 'query-string';
import { connect } from 'react-redux';
import { setSearch } from '../action/search';
import filter from 'lodash/filter';

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
    const self = this;
    const searchQuery = queryString.parse(query);
      if(searchQuery['title']) {
        api.findMoviesByTitle(searchQuery['title'])
         .then(function(data) {  
           self.props.setSearch(data.results);
         })
         .catch(function(error) {
           console.log('Request failed', error);  
         });

     } else if (searchQuery['director']) {
       api.findMoviesByDirectorName(searchQuery['director'])
        .then(function(data) {  
          console.log('Request succeeded with JSON response', data);
          self.props.setSearch(filter(data.crew, { 'job': 'Director' }));
          console.log('store' + self.props.search)
        })
        .catch(function(error) {
          console.log('Request failed', error);  
        });
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
            {this.props.search.movies ? <SearchSum sum={this.props.search.movies.length}/> : ''}
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

const actions = {
  setSearch
}

function mapProps(state) {
  return {
    sortBy: state.sort,
    search: state.search
  }
}

export default connect(mapProps, actions)(SearchPage);

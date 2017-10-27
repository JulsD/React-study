import React from 'react';
import sortBy from 'lodash/sortBy';
import reverse from 'lodash/reverse';
import * as api from '../resource/api';
import * as queryString from 'query-string';
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
    this.state = {
      sortBy: 'release_year'
    };
  }

  handleSortBy(value) {
    this.setState({
      sortBy: value
    });
  }

  searchMoviesByParam(query){
    const searchQuery = queryString.parse(query);
    let self = this;
      if(searchQuery['title']) {
        api.findMoviesByTitle(searchQuery['title'])
         .then(function(data) {  
           self.setState({
             movies: data.results
           })
         })
         .catch(function(error) {
           console.log('Request failed', error);  
         });

     } else if (searchQuery['director']) {
       api.findMoviesByDirectorName(searchQuery['director'])
        .then(function(data) {  
          console.log('Request succeeded with JSON response', data);
          self.setState({
            movies: filter(data.crew, { 'job': 'Director' })
          })
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
    if(this.state.movies){
      if(this.state.movies.length > 0) {
        moviesSorted = sortBy(this.state.movies, [this.state.sortBy]);
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
            {this.state.movies ? <SearchSum sum={this.state.movies.length}/> : ''}
            {this.state.movies ? <SearchSort onSelectSortBy={this.handleSortBy.bind(this)}/> : ''}
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

export default SearchPage;

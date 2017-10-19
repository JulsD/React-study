import React from 'react';
import sortBy from 'lodash/sortBy';
import reverse from 'lodash/reverse';
import * as api from '../data/api';
import * as queryString from 'query-string';

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
    let searchObj= {};
    if(searchQuery['title'] || searchQuery['director']) {
      if(searchQuery['title']) {
        searchObj = {
          'show_title': searchQuery['title']
        };
      } else {
        searchObj = searchQuery;
      }

      api.findMoviesBy(searchObj).then(
        (result) => {

          this.setState({
            movies: result
          });
        }
      );
    }
  }

  componentDidMount (){
    this.searchMoviesByParam(this.props.location.search);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.location.searc !== this.props.location.search) {
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

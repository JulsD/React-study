import React from 'react';
import sortBy from 'lodash/sortBy';
import reverse from 'lodash/reverse';
import * as api from '../data/api';

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

  render() {
    
    let searchQuery = location.search;
    if(searchQuery[0] == '?') {
      searchQuery = searchQuery.slice(1);
    }
    let searchProp = searchQuery.slice(0, (searchQuery.indexOf('=')));
    if(searchProp == 'title') {
      searchProp = 'show_title';
    }
    let searchValue = searchQuery.slice(searchQuery.indexOf('=') + 1).split('%20').join(' ');
    const searchObj= {};
    searchObj[searchProp] = searchValue;
    
    const filteredMovies = api.findMoviesBy(searchObj);
    
    let movies = [];
    let searchResultBody = null;

    if(filteredMovies.length > 0) {
      movies = sortBy(filteredMovies, [this.state.sortBy]);
      searchResultBody = <MoviesList movies={reverse(movies)}/>;
    } else {
      searchResultBody = <EmptySearch />;
    }

    return (
      <div>
        <Header>
          <HeaderNav />
          <SearchBox />
        </Header>
        <HeaderFooter>
          <SearchNav>
            <SearchSum sum={movies.length}/>
            <SearchSort onSelectSortBy={this.handleSortBy.bind(this)}/>
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

import React from 'react';
import sortBy from 'lodash/sortBy';
import reverse from 'lodash/reverse';

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

import DB from '../../../mock-db/db.json';

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
    let movies = DB || null;
    movies = sortBy(movies, [this.state.sortBy]);
    let searchResultBody = null;
    if (movies) {
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

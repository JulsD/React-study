import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { 
  Header, 
  Footer, 
  SearchResult, 
  HeaderNav, 
  SearchBox, 
  HeaderFooter, 
  SearchNav, 
  MoviesList, 
  EmptySearch 
} from './../components';
import common from './../../styles/common.css';

class SearchPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = {common.typo}>
        <Header>
          <HeaderNav />
          <SearchBox />
        </Header>
        <HeaderFooter>
          <SearchNav />
        </HeaderFooter>
        <SearchResult>
          <Switch>
            <Route exact path='/' component={EmptySearch}/>
            <Route path='/Search' component={MoviesList}/>
          </Switch>
        </SearchResult>
        <Footer />
      </div>
    );
  }

}

export default SearchPage;

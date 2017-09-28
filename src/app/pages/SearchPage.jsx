import React from 'react';

import { 
  Header, 
  Footer, 
  SearchResult, 
  HeaderNav, 
  SearchBox, 
  HeaderFooter, 
  SearchNav
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
        <SearchResult />
        <Footer />
      </div>
    );
  }

}

export default SearchPage;

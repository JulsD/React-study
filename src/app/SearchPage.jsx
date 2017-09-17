import React from 'react';

import Header from './components/Header';
import SearchNav from './components/SearchNav';
import SearchResult from './components/SearchResult';
import Footer from './components/Footer';

class SearchPage extends React.Component {

  render() {
    const style = {
      width: '100%'
    };
    return (
      <div style={style}>
        <Header />
        <SearchNav />
        <SearchResult movies={[1,2,3]}/>
        <Footer />
      </div>
    );
  }

}

export default SearchPage;

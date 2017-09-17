import React from 'react';

import Header from './components/Header';
import SearchResult from './components/SearchResult';
import Footer from './components/Footer';

class SearchPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {movieOpend: false};
  }

  render() {
    const movieOpend = this.state.movieOpend;
    const style = {
      width: '100%'
    };
    const movies = [1,2,3];
    return (
      <div style={style}>
        <Header movieOpend={movieOpend} emptyResults = {movies ? false : true}/>
        <SearchResult movies = {movies}/>
        <Footer />
      </div>
    );
  }

}

export default SearchPage;

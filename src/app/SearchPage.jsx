import React from 'react';

import Header from './components/Header';
import SearchResult from './components/SearchResult';
import Footer from './components/Footer';

class SearchPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {movieOpend: true};
  }

  render() {
    const movieOpend = this.state.movieOpend;
    const style = {
      width: '100%'
    };
    return (
      <div style={style}>
        <Header movieOpend={movieOpend}/>
        <SearchResult movies={[1,2,3]}/>
        <Footer />
      </div>
    );
  }

}

export default SearchPage;

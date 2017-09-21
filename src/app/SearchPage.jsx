import React from 'react';

import { Logo, Header, Footer, SearchResult} from './components';
import common from './../styles/common.css';

class SearchPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {movieOpend: false};
  }

  render() {
    const movieOpend = this.state.movieOpend;
    const movies = [1,2,3,4,5];
    return (
      <div className = {common.typo}>
        <Header movieOpend={movieOpend} emptyResults = {movies ? false : true}/>
        <SearchResult movies = {movies}/>
        <Footer>
          <Logo />
        </Footer>
      </div>
    );
  }

}

export default SearchPage;

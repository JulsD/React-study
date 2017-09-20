import React from 'react';
import Nav from './Nav';
import SearchBox from './SearchBox';
import MovieBox from './MovieBox';
import HeaderFooter from './HeaderFooter';

import common from './../../styles/common.css';
import styles from './../../styles/header.css';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const movieOpend = this.props.movieOpend;
    const emptyResults = this.props.emptyResults;

    let headerBody = null;
    if (movieOpend) {
      headerBody = <MovieBox />;
    } else {
      headerBody = <SearchBox />;
    }

    return (
      <header className = {styles.root}>
        <div className = {common.wrapper}>
          <Nav movieOpend={movieOpend}/>
          {headerBody}
        </div>
        <HeaderFooter movieOpend={movieOpend} emptyResults = {emptyResults}/>
      </header>
    );
  }

}

export default Header;

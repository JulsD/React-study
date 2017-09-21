import React from 'react';
import HeaderNav from './../HeaderNav/HeaderNav';
import SearchBox from './../SearchBox/SearchBox';
import MovieBox from './../MovieBox/MovieBox';
import HeaderFooter from './../HeaderFooter/HeaderFooter';

import common from './../../../styles/common.css';
import styles from './header.css';

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
          <HeaderNav movieOpend={movieOpend}/>
          {headerBody}
        </div>
        <HeaderFooter movieOpend={movieOpend} emptyResults = {emptyResults}/>
      </header>
    );
  }

}

export default Header;

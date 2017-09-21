import React from 'react';

import SearchSort from './../SearchSort';
import SearchSum from './../SearchSum';
import styles from './search-nav.css';

class SearchNav extends React.Component {

  render() {
    return (
      <nav className = {styles.root}>
        <SearchSum />
        <SearchSort />
      </nav>
    );
  }

}

export default SearchNav;

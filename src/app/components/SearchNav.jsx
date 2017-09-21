import React from 'react';
import SearchSum from './SearchSum';
import SearchSort from './SearchSort';

import styles from './../../styles/search-nav.css';

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
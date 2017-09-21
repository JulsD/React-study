import React from 'react';

import { SearchSum, SearchSort} from './../';
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

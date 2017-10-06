import React from 'react';

import SearchSort from './../SearchSort';
import SearchSum from './../SearchSum';
import styles from './search-nav.css';

class SearchNav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className = {styles.root}>
        <SearchSum sum={this.props.sum}/>
        <SearchSort />
      </nav>
    );
  }

}

export default SearchNav;

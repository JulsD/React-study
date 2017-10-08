import React from 'react';

import styles from './search-nav.css';

class SearchNav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className = {styles.root}>
        {this.props.children}
      </nav>
    );
  }

}

export default SearchNav;

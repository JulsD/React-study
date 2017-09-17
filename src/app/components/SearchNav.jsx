import React from 'react';
import SearchSum from './SearchSum';
import SearchSort from './SearchSort';

class SearchNav extends React.Component {

  render() {
    const style = {
      width: '100%',
      display: 'flex'
    };
    return (
      <nav style={style}>
        <SearchSum />
        <SearchSort />
      </nav>
    );
  }

}

export default SearchNav;

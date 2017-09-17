import React from 'react';
import Logo from './Logo';
import SearchBox from './SearchBox';

class Header extends React.Component {

  render() {
    const style = {
      width: '100%',
      backgroundColor: 'yellow'
    };
    return (
      <header style={style}>
        <Logo />
        <SearchBox />
      </header>
    );
  }

}

export default Header;

import React from 'react';

import { Logo, NavMenu } from './../';

import styles from './header-nav.css';

class Nav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const movieOpend = this.props.movieOpend;

    let navBody = null;
    if (movieOpend) {
      navBody = <NavMenu menu={['Search']}/>;
    }
    
    return (
      <nav className = {styles.root}>
        <Logo />
        {navBody}
      </nav>
    );
  }

}

export default Nav;

import React from 'react';

import { Logo } from './../';

import styles from './header-nav.css';

class Nav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {    
    return (
      <nav className = {styles.root}>
        <Logo />
          {this.props.children}
      </nav>
    );
  }

}

export default Nav;

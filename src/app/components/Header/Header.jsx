import React from 'react';

import Wrapper from './../Wrapper';
import styles from './header.css';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className = {styles.root}>
        <Wrapper>
          {this.props.children}
        </Wrapper>
      </header>
    );
  }

}

export default Header;

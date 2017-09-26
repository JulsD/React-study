import React from 'react';

import Logo from './../Logo';
import Wrapper from './../Wrapper';

import styles from './footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className = {styles.root}>
        <Wrapper>
          <Logo />
          {this.props.children}
        </Wrapper>
      </footer>
    );
  }

}

export default Footer;

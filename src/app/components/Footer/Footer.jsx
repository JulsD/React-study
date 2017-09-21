import React from 'react';

import Logo from './../Logo';

import common from './../../../styles/common.css';
import styles from './footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className = {styles.root}>
        <div className = {common.wrapper}>
          <Logo />
          {this.props.children}
        </div>
      </footer>
    );
  }

}

export default Footer;

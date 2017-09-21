import React from 'react';
import Logo from './../Logo/Logo';

import common from './../../../styles/common.css';
import styles from './footer.css';

class Footer extends React.Component {

  render() {
    return (
      <footer className = {styles.root}>
        <div className = {common.wrapper}>
          <Logo />
        </div>
      </footer>
    );
  }

}

export default Footer;

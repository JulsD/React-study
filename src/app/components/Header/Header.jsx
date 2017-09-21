import React from 'react';

import common from './../../../styles/common.css';
import styles from './header.css';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className = {styles.root}>
        <div className = {common.wrapper}>
          {this.props.children}
        </div>
      </header>
    );
  }

}

export default Header;

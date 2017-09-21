import React from 'react';

import common from './../../../styles/common.css';
import styles from './header-footer.css';

class HeaderFooter extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = {styles.root}>
        <div className = {common.wrapper}>
          {this.props.children}
        </div>
      </div>
    );
  }

}

export default HeaderFooter;

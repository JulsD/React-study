import React from 'react';

import styles from './empty-search.css';

class Footer extends React.Component {

  render() {
    return (
      <p className = {styles.root}>No films found</p>
    );
  }

}

export default Footer;
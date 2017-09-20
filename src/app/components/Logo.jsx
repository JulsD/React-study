import React from 'react';
import styles from './../../styles/logo.css';

class Logo extends React.Component {

  render() {
    return (
      <div className = {styles.root}>
        <img src='../img/logo.png' alt='netflixroulette' />
      </div>
    );
  }

}

export default Logo;

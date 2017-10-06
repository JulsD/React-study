import React from 'react';
import { Link } from 'react-router-dom'
import styles from './logo.css';

class Logo extends React.Component {

  render() {
    return (
      <div className = {styles.root}>
        <Link to='/'>
          netflixroulette
        </Link>
      </div>
    );
  }

}

export default Logo;

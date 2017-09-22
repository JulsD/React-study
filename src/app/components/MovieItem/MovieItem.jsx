import React from 'react';
import { Link } from 'react-router-dom'

import btn from './../../../styles/buttons.css';
import styles from './movie-item.css';

class MovieItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link to='/movie'>
        <div className = {styles.root}>
          <div className= {styles.cover}></div>
          <div className= {styles.details}>
            <div className= {styles.title}>{this.props.title} Title</div>
            <div className= {`${styles.date} ${btn.btn}`}>1990</div>
            <div className={styles.genre}>genre</div>
          </div>
        </div>
      </Link>
    );
  }

}

export default MovieItem;

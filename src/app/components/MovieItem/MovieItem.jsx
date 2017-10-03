import React from 'react';
import { Link } from 'react-router-dom'

import Button from '../Button'
import styles from './movie-item.css';

class MovieItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const linkTo = `/movie/:title`;
    return (
      <Link to={linkTo}>
        <div className = {styles.root}>
          <div className= {styles.cover}></div>
          <div className= {styles.details}>
            <div className= {styles.title}>{this.props.title} Title</div>
            <Button kind='informative'>1990</Button>
            <div className={styles.genre}>genre</div>
          </div>
        </div>
      </Link>
    );
  }

}

export default MovieItem;

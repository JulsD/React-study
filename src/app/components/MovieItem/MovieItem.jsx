import React from 'react';
import { Link } from 'react-router-dom'

import Button from '../Button'
import styles from './movie-item.css';

class MovieItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let movie = this.props.movie;
    const linkTo = `/movie/${movie.show_title}`;
    return (
      <Link to={linkTo}>
        <div className = {styles.root}>
          <div className= {styles.cover}>
            <div style={{backgroundImage: 'url(' + movie.poster + ')'}}></div>
          </div>
          <div className= {styles.details}>
            <div className= {styles.title}>{movie.show_title}</div>
            <Button kind='informative'>{movie.release_year}</Button>
            <div className={styles.genre}>{movie.category}</div>
          </div>
        </div>
      </Link>
    );
  }

}

export default MovieItem;

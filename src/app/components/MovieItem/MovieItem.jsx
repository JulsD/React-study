import React from 'react';
import { Link } from 'react-router-dom'

import Button from '../Button'
import styles from './movie-item.css';

class MovieItem extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {} 
  }

  render() {
    let movie = this.props.movie;
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
    const linkTo = `/movie/${movie.id}?title=${movie.title}`;
    return (
      <Link to={linkTo}>
        <div className = {styles.root}>
          <div className= {styles.cover}>
            <div style={{backgroundImage: 'url(' + imageBaseUrl + movie.poster_path + ')'}}></div>
          </div>
          <div className= {styles.details}>
            <div className= {styles.title}>{movie.title}</div>
            <Button kind='informative'>{movie.release_date}</Button>
            <div className={styles.genre}>{movie.vote_average} rate</div>
          </div>
        </div>
      </Link>
    );
  }

}

export default MovieItem;

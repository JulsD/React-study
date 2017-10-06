import React from 'react';

import styles from './movie-box.css';

class MovieBox extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    let movie = this.props.movie;
    return (
      <div className = {styles.root}>
        <div className = {styles.coverWrapper}>
          <div className = {styles.cover}>
            <div style={{backgroundImage: 'url(' + movie.poster + ')'}}></div>
          </div>
        </div>
        <div className = {styles.details}>
          <div className = {styles.row}>
            <h2 className = {styles.title}>
              {movie.show_title}
            </h2>
            <div className = {styles.rate}>
              <span>{movie.rating}</span>
            </div>
            <p className = {styles.genre}>{movie.category}</p>
            <div className = {styles.numb}>{movie.release_year}</div>
            <div className = {styles.numb}>{movie.runtime}</div>
          </div>
          <div className = {styles.row}>
            <p className = {styles.description}>{movie.summary}</p>
          </div>
          <div className = {styles.additional}>
            <p className = {styles.director}>{movie.director}</p>
            <p className = {styles.castList}>{movie.show_cast}</p>
          </div>
        </div>
      </div>
    );
  }

}

export default MovieBox;

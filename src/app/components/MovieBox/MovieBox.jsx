import React from 'react';

import styles from './movie-box.css';

class MovieBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imageBaseUrl: 'https://image.tmdb.org/t/p/w500'
    } 
  }

  render() {
    let movie = this.props.movie;
    return (
      <div className = {styles.root}>
        <div className = {styles.coverWrapper}>
          <div className = {styles.cover}>
            <div style={{backgroundImage: 'url(' + this.state.imageBaseUrl + movie.poster_path + ')'}}></div>
          </div>
        </div>
        <div className = {styles.details}>
          <div className = {styles.row}>
            <h2 className = {styles.title}>
              {movie.title}
            </h2>
            <div className = {styles.rate}>
              <span>{movie.vote_average}</span>
            </div>
            <p className = {styles.genre}>
              {movie.genres.map(item => <span key={item.id}>{item.name} </span>)}
            </p>
            <div className = {styles.numb}>{movie.release_date}</div>
            <div className = {styles.numb}>{movie.runtime} min</div>
          </div>
          <div className = {styles.row}>
            <p className = {styles.description}>{movie.overview}</p>
          </div>
          <div className = {styles.additional}>
            <p>
              {movie.director.map(item => <span key={item.id}>{item.name}<i>, </i></span>)}
            </p>
            <p>
              {movie.actors.map(item => <span key={item.cast_id}>{item.name}<i>, </i></span>)}
                
            </p>
          </div>
        </div>
      </div>
    );
  }

}

export default MovieBox;

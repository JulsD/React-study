import React from 'react';

import MovieItem from './../MovieItem';
import styles from './movies-list.css';

class MoviesList extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    const movies = [1,2,3,4,5];
    const listMovies = movies.map((movie) =>
      <MovieItem key={movie.toString()} title={movie} />
    );
    return (
      <div className = {styles.root}>
        {listMovies}
      </div>
    );
  }

}

export default MoviesList;
